/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.button = Earp.Generator.extend({

    addOption: function (name, value) {
        if (name === 'fontSize' || name === 'fontFamily') {
            if (typeof this.options.font !== 'object') {
                this.options.font = {};
            }
            this.options.font[name] = value;
        } else {
            Earp.Generator.prototype.addOption.call(this, name, value);
        }
    },

    factory: function (options) {
        return Titanium.UI.createButton(options);
    }

});