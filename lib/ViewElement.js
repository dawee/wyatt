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
};

ViewElement.prototype.clicked = function (cb) {
    this.ui.addEventListener('click', cb);
};

ViewElement.extend = extend;

module.exports = ViewElement;