var uiobject = require('./uiobject');
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
        var uiObject = this.factory(this.getOptions()),
            index = 0,
            child = {},
            id = this.element.getAttribute('id');

        uiobject.feed(uiObject, this.identityMap);
        
        if (typeof id === 'string' && id.length > 0) {
            this.identityMap[id] = uiObject;
        }
        for (index = 0; index < this.element.childNodes.length; index += 1) {
            var item = this.element.childNodes.item(index);
            if (item.nodeType === item.ELEMENT_NODE) {
                child = getGenerator(
                    this.element.childNodes.item(index),
                    this.dom,
                    this.identityMap
                );
                uiObject.add(child.proceed());
            }
        }
        return uiObject;
    },

};

Generator.extend = function (def) {
    var generator = function (element, dom, identityMap) {
        this.element = element;
        this.dom = dom;
        this.identityMap = identityMap;
    };

    Object.keys(Generator.prototype).forEach(function (key) {
        generator.prototype[key] = Generator.prototype[key];    
    });

    Object.keys(def).forEach(function (key) {
        generator.prototype[key] = def[key];
    });

    return generator;
};

function getGenerator(element, dom, identityMap) {
    var generator = null;
    if (settings.generators.hasOwnProperty(element.tagName)) {
        generator = new settings.generators[element.tagName](
            element,
            dom,
            identityMap
        );
    } else {
        throw 'EarpError: "' + element.tagName + '"' + ' is unknown.';
    }
    return generator;
}

module.exports = {
    Generator: Generator,
    getGenerator: getGenerator
};
