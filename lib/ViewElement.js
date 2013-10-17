var Ti = require('titanium-namespace');
var extend = require('extendable');

function ViewElement(options) {
    if (typeof this.initialize === 'function') this.initialize(options);
    this._patch(options.specials);
    this.create(options.properties);

    this['0'] = this.ui;
}

ViewElement.prototype._isYatElement = true;

ViewElement.prototype._patch = function (keys) {
    var element = this;

    Object.keys(keys).forEach(function(key) {
        element[key] = keys[key];
    });
};

ViewElement.prototype.create = function (options) {
    this.ui = Ti.UI.createView(options);
};

ViewElement.prototype.append = function (child) {
    var element = this;

    if (Array.isArray(child)) {
        child.forEach(function (c) { element.append(c); });
    } else {
        this.ui.add(child._isYatElement ? child.ui : child);
    }

    return this;
};

ViewElement.prototype.clicked = function (cb) {
    this.ui.addEventListener('click', cb);
    return this;
};

ViewElement.prototype.attr = function (key, value) {
    var setter = 'set' + key.replace(/^[a-z]/, function(m){ return m.toUpperCase() });

    if (typeof this.ui[setter] === 'function') {
        this.ui[setter](options[key]);
    } else {
        this.ui[key] = options[key];
    }

    return this;
};

ViewElement.prototype.on = function (evt, cb) {
    this.ui.addEventListener(evt, cb);
};

ViewElement.prototype.trigger = function (evt, args) {
    this.ui.fireEvent(evt, args);
};

ViewElement.prototype.off = function (evt, cb) {
    this.ui.removeEventListener(evt, cb);
};


ViewElement.extend = extend;

module.exports = ViewElement;