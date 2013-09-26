;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.config = {
    paths: {
        earps: '',
        widgets: ''
    },
    extension: '.earp',
    widgets: [],
    onload: function () {},
};

Earp.init = function (options) {
    var key = '',
        subkey = '';

    for (key in options) {
        if (options.hasOwnProperty(key)) {
            if (typeof options[key] === 'object'
                    && Earp.config.hasOwnProperty(key)
                    && typeof Earp.config[key] === 'object') {
                for (subkey in options[key]) {
                    if (options[key].hasOwnProperty(subkey)) {
                        Earp.config[key][subkey] = options[key][subkey];
                    }
                }
            } else {
                Earp.config[key] = options[key];
            }
        }
    }

    Earp.config.widgets.forEach(function (widget) {
        var widgetPath = Earp.config.paths.widgets
                            + '/'
                            + widget.replace(/^\//, '');
        require(widgetPath);
    });

    Earp.config.onload();
};
},{}]},{},[1])
;