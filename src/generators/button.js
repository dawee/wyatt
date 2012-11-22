/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.button = Earp.Generator.extend({

    factory: function (options) {
        return Titanium.UI.createButton(options);
    }

});