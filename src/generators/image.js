/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.image = Earp.Generator.extend({

    factory: function (options) {
        return Titanium.UI.createImageView(options);
    }

});