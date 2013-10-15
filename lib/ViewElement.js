var extend = require('extendable');

function ViewElement(template) {}

ViewElement.prototype.patch = function (keys) {
    var element = this;

    Object.keys(keys).filter(function (k) {return k[0] === '_'}).forEach(function(key) {
        element[key] = keys[key];
    });
};

ViewElement.prototype.create = function (options) {
    this.ui = Titanium.UI.createView(options);
};

ViewElement.prototype.append = function (el) {
    this.ui.add(el.ui);
};

ViewElement.prototype.click = function (cb) {
    this.ui.addEventListener('click', cb);
};

ViewElement.extend = extend;

module.exports = ViewElement;