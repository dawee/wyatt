var Handlebars = require('handlebars');
var settings = require('./lib/settings');
var Builder = require('./lib/builder');
var generator = require('./lib/generator');

function Earp(options) {
    settings.extend(options);

    settings.widgets.forEach(function (widgetPath) {
        var widget = require(widgetPath);

        settings.generators.push(widget.register(generator.Generator));
    });
};

Earp.build = function (path, context) {
    var builder = Builder(path, context);
    return builder.run();
};

Earp.define = function (name, def) {
    generators[name] = generator.Generator.extend(def);
};


settings.extend({

    generators: {
        button: generator.Generator.extend(require('./lib/generators/button')),
        image: generator.Generator.extend(require('./lib/generators/image')),
        input: generator.Generator.extend(require('./lib/generators/input')),
        label: generator.Generator.extend(require('./lib/generators/label')),
        scroll: generator.Generator.extend(require('./lib/generators/scroll')),
        view: generator.Generator.extend(require('./lib/generators/view')),
        window: generator.Generator.extend(require('./lib/generators/window'))
    }

});




// Export Handlebars in case of creating helpers is necessaray
Earp.hbs = Handlebars;

module.exports = Earp;