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