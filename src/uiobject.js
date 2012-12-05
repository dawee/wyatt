/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.feedUIObject = function (ui) {

    ui.get = function (id) {
        var child = null;
        if (this.generator.identityMap.hasOwnProperty(id)) {
            child = this.generator.identityMap[id];
        }
        return child;
    };

    ui.onclick = function (callback) {
        ui.addEventListener('click', callback);
    };

    return ui;
};

Earp.ui = Earp.feedUIObject;
