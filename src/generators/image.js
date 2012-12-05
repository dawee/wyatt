/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.image = Earp.Generator.extend({

    aliases: {
        src: 'image',
    },

    factory: function (options) {
        return Titanium.UI.createImageView(options);
    }

});