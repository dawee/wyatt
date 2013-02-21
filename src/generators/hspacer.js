/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.hspacer = Earp.Generator.extend({

    defaults: {
        height: '100%',
    },

    aliases: {
        size: 'width',
    },

    factory: function (options) {
        return Titanium.UI.createView(options);
    }

});