/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.scroll = Earp.Generator.extend({

    factory: function (options) {
        return Titanium.UI.createScrollView(options);
    }

});