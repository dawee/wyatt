var Handlebars = require('handlebars');
var generator = require('./generator');
var pathes = {};

function Renderer(path, context) {
    this.init(path, context);
}

Renderer.prototype = {

    init: function (path, context) {
        this.context = context || {};
        this.context.Ti = {
            UI: Titanium.UI
        };
        this.path = path;
        this.open();
        this.identityMap = {};
    },

    open: function () {
        this.file = Titanium.Filesystem.getFile(
            Titanium.Filesystem.resourcesDirectory,
            this.path
        );
        if (!this.file.exists()) {
            throw 'EarpError - Failed to parse "' + this.path + '" : File does not exist';
        }
    },

    parse: function (stream) {
        var dom = null;
        try {
            dom = Titanium.XML.parseString(stream);
        } catch (e) {
            throw 'EarpError - Failed to parse "' + this.path + '" : Bad XML syntax';
        }
        return dom;
    },

    run: function () {
        var template;

        if (pathes.hasOwnProperty(this.path)) {
            template = pathes[this.path];
        } else {
            var content = this.file.read();
            var stream = content.toString();
            
            template = Handlebars.compile(stream);
            pathes[this.path] = template;
        }

        var exported = template(this.context);
        var dom = this.parse(exported);
        var gen = generator.getGenerator(dom.documentElement, dom, this.identityMap);

        return gen.proceed();
    }

};

module.exports = Renderer;