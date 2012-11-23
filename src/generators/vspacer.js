/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.vspacer = Earp.Generator.extend({

    defaults: {
        width: '100%',
    },

    aliases: {
        size: 'height',
    },

    factory: function (options) {
        return Titanium.UI.createView(options);
    }

});