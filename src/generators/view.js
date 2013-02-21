/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.view = Earp.Generator.extend({

    factory: function (options) {
        return Titanium.UI.createView(options);
    }

});