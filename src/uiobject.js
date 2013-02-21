/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.feedUIObject = function (ui, identityMap) {

    ui.getViewByID = function (id) {
        var child = null;
        if (identityMap.hasOwnProperty(id)) {
            child = identityMap[id];
        }
        return child;
    };

    ui.onclick = function (callback) {
        ui.addEventListener('click', callback);
    };

    return ui;
};

Earp.ui = Earp.feedUIObject;
