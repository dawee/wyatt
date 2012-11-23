/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.feedUIObject = function (uiObject) {

    uiObject.get = function (id) {
        var child = null;
        if (this.generator.identityMap.hasOwnProperty(id)) {
            child = this.generator.identityMap[id];
        }
        return child;
    };

};