/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.input = Earp.Generator.extend({

    addOption: function (name, value) {
        if (name === 'type' && value === 'password') {
            Earp.Generator.prototype.addOption.call(this, 'passwordMask', true);
        } else {
            Earp.Generator.prototype.addOption.call(this, name, value);
        }
    },

    factory: function (options) {
        return Titanium.UI.createTextField(options);
    }

});