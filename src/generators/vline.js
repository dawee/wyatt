/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.vline = Earp.Generator.extend({

    defaults: {
        height: '100%',
        color: 'black',
        width: 1
    },

    aliases: {
        size: 'width',
        color: 'backgroundColor'
    },

    factory: function (options) {
        return Titanium.UI.createView(options);
    }

});
