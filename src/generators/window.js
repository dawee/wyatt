/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.window = Earp.Generator.extend({

    factory: function (options) {
        return Titanium.UI.createWindow(options);
    }

});