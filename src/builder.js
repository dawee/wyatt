/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.Builder = function (path, context) {
    this.init(path, context);
};

Earp.Builder.prototype = {

    init: function (path, context) {
        this.context = context || {};
        this.context.Ti = {
            UI: Titanium.UI
        };
        this.basePath = path;
        this.path = Earp.config.paths.earps
            + '/'
            + path.replace(/^\//, '')
            + Earp.config.extension;
        this.open();
        this.identityMap = {};
    },

    open: function () {
        this.file = Titanium.Filesystem.getFile(
            Titanium.Filesystem.resourcesDirectory,
            this.path
        );
        if (!this.file.exists()) {
            throw 'EarpError - Failed to parse "'
                    + this.path
                    + '" : File does not exist';
        }
    },

    parse: function (stream) {
        var dom = null;
        try {
            dom = Titanium.XML.parseString(stream);
        } catch (e) {
            throw 'EarpError - Failed to parse "'
                    + this.path
                    + '" : Bad XML syntax';
        }
        return dom;
    },

    run: function () {
        var content,
            stream,
            template,
            exported,
            dom,
            generator;
        if (Earp.pathes.hasOwnProperty(this.basePath)) {
            template = Earp.pathes[this.basePath];
        } else {
            content = this.file.read();
            stream = content.toString();
            template = Handlebars.compile(stream);
            Earp.pathes[this.basePath] = template;
        }
        exported = template(this.context);
        dom = this.parse(exported);
        generator = Earp.getGenerator(
            dom.documentElement,
            dom,
            this.identityMap
        );
        return generator.proceed();
    }

};

Earp.pathes = {};

Earp.build = function (path, context) {
    var builder = new Earp.Builder(path, context);
    return builder.run();
};

// Export Handlebars in case of creating helpers is necessaray
Earp.hbs = Handlebars;