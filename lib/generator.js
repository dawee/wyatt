var settings = require('./settings');

function Generator() {}

Generator.prototype = {

    getOptions: function () {
        var index = 0,
            attributes = this.element.attributes,
            defaults = this.defaults || {},
            attribute = null;
        
        this.options = {};
        
        for (attribute in defaults) {
            if (defaults.hasOwnProperty(attribute)) {
                this.options[attribute] = defaults[attribute];
            }
        }
        for (index = 0; index < attributes.getLength(); index += 1) {
            this.addOption(
                attributes.item(index).nodeName,
                attributes.item(index).nodeValue
            );
        }
        return this.options;
    },

    addOption: function (name, value) {
        var aliases = this.aliases || {};

        if (aliases.hasOwnProperty(name)) {
            this.addOption(aliases[name], value);
        } else {
            if (typeof value === 'string' && value.indexOf('{') >= 0) {
                this.options[name] = JSON.parse(value.replace(/\'/g, '"'));
            } else {
                this.options[name] = value;
            }
        }
    },

    proceed: function () {
        var index = 0,
            child = {},
            id = this.element.getAttribute('id');

        this.ux = this.factory(this.getOptions());

        if (typeof id === 'string' && id.length > 0) {
            this.root.registerId(id, this);
        }
        for (index = 0; index < this.element.childNodes.length; index += 1) {
            var item = this.element.childNodes.item(index);
            if (item.nodeType === item.ELEMENT_NODE) {
                child = getGenerator(
                    this.element.childNodes.item(index),
                    this.root
                );
                this.ux.add(child.proceed().ux);
            }
        }
        return this;
    },

};

Generator.extend = function (def) {
    var generator = function (element, root) {
        this.element = element;
        this.root = root;
    };

    Object.keys(Generator.prototype).forEach(function (key) {
        generator.prototype[key] = Generator.prototype[key];    
    });

    Object.keys(def).forEach(function (key) {
        generator.prototype[key] = def[key];
    });

    return generator;
};

function getGenerator(element, root) {
    var generator = null;

    console.log(element.tagName)

    if (settings.generators.hasOwnProperty(element.tagName)) {
        generator = new settings.generators[element.tagName](element, root);
    } else {
        throw 'EarpError: "' + element.tagName + '"' + ' is unknown.';
    }
    return generator;
}

module.exports = {
    Generator: Generator,
    getGenerator: getGenerator
};
