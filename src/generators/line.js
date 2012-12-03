/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.hline = Earp.Generator.extend({

    defaults: {
        width: '100%',
        color: 'black',
        height: 1,
        style: 'solid'
    },

    aliases: {
        size: 'height',
        color: 'backgroundColor'
    },

    factory: function (options) {
        return Titanium.UI.createView(options);
    }

});


Earp.generators.line = Earp.generators.hline;