/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.line = Earp.Generator.extend({

    defaults: {
        width: '100%',
        color: 'black',
        height: 1
    },

    aliases: {
        size: 'height',
        color: 'backgroundColor'
    },

    factory: function (options) {
        return Titanium.UI.createView(options);
    }

});