/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.Generator = function () {};

Earp.Generator.prototype = {

    getOptions: function () {
        var index = 0,
            attributes = this.element.attributes;
        this.options = {};
        for (index = 0; index < attributes.getLength(); index += 1) {
            this.addOption(
                attributes.item(index).nodeName,
                attributes.item(index).nodeValue
            );
        }
        return this.options;
    },

    addOption: function (name, value) {
        this.options[name] = value;
    },

    proceed: function () {
        var uiObject = this.factory(this.getOptions()),
            index = 0,
            child = {};
        for (index = 0; index < this.element.childNodes.length; index += 1) {
            if (this.element.childNodes[index].hasOwnProperty('tagName')) {
                child = Earp.getGenerator(this.element.childNodes[index]);
                uiObject.add(child.proceed());
            }
        }
        return uiObject;
    },

};

Earp.Generator.extend = function (def) {
    var key = null,
        generator = function (element) {
            this.element = element;
        };

    for (key in Earp.Generator.prototype) {
        if (Earp.Generator.prototype.hasOwnProperty(key)) {
            generator.prototype[key] = Earp.Generator.prototype[key];
        }
    }

    for (key in def) {
        if (def.hasOwnProperty(key)) {
            generator.prototype[key] = def[key];
        }
    }

    return generator;
};


Earp.generators = {};

Earp.getGenerator = function (element) {
    var generator = null;
    if (Earp.generators.hasOwnProperty(element.tagName)) {
        generator = new Earp.generators[element.tagName](element);
    } else {
        throw 'EarpError: "' + element.tagName + '"' + ' is unknown.';
    }
    return generator;
};
