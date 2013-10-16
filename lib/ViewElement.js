var Titanium = require('titanium-namespace');
var extend = require('extendable');

function ViewElement() {}

ViewElement.prototype.isYatElement = true;

ViewElement.prototype.patch = function (keys) {
    var element = this;

    Object.keys(keys).forEach(function(key) {
        element[key] = keys[key];
    });
};

ViewElement.prototype.create = function (options) {
    this.ui = Titanium.UI.createView(options);
};

ViewElement.prototype.append = function (child) {
    var element = this;

    if (Array.isArray(child)) {
        child.forEach(function (c) { element.append(c); });
    } else {
        this.ui.add(child.isYatElement ? child.ui : child);
    }

    return this;
};

ViewElement.prototype.clicked = function (cb) {
    this.ui.addEventListener('click', cb);
    return this;
};

ViewElement.prototype.set = function (options) {
    var ui = this.ui;

    Object.keys(options).forEach(function (key) {
        var setter = 'set' + key.replace(/^[a-z]/, function(m){ return m.toUpperCase() });

        if (typeof ui[setter] === 'function') {
            ui[setter](options[key]);
        } else {
            ui[key] = options[key];
        }
    });

    return this;
};

ViewElement.prototype.on = function (evt, cb) {
    this.ui.addEventListener(evt, cb);
};

ViewElement.prototype.trigger = function (evt, args) {
    this.ui.fireEvent(evt, args);
};


ViewElement.extend = extend;

module.exports = ViewElement;