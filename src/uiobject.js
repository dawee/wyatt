/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.feedUIObject = function (uiObject) {

    uiObject.get = function (id) {
        var element = this.dom.getElementById(id),
            child = null;
        if (!!element) {
            child = element.ui;
        }
        return child;
    };

};