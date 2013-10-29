var Ti = require('titanium-namespace');
var extend = require('extendable');

function ViewElement(template, yat) {
  if (typeof this.initialize === 'function') this.initialize(template);
  this._patch(template);
  this.create(template.options || {});
  this.yat = yat;
}

ViewElement.prototype._isYatElement = true;

ViewElement.prototype._patch = function (keys) {
  var el = this;

  Object.keys(keys).forEach(function(key) {
    el[key] = keys[key];
  });
};

ViewElement.prototype.first = function (query) {
  return this.yat.first(query);
};

ViewElement.prototype.where = function (query) {
  return this.yat.where(query);
};

ViewElement.prototype.create = function (options) {
  this.ui = Ti.UI.createView(options);
};

ViewElement.prototype.append = function (child) {
  var el = this;

  if (Array.isArray(child)) {
    child.forEach(function (c) { el.append(c); });
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
  var setter = 'set' + key.replace(/^[a-z]/, function(m){ return m.toUpperCase(); });

  if (typeof this.ui[setter] === 'function') {
    this.ui[setter](value);
  } else {
    this.ui[key] = value;
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