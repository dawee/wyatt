/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.generators.label = Earp.Generator.extend({

    factory: function (options) {
        return Titanium.UI.createLabel(options);
    }

});