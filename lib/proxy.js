var extend = require('extendable');
var YatDocument = require('./yat/document');

function Proxy(template) {
  template = template || {};

  if (typeof this.initialize === 'function') this.initialize(template);
  this.data = [];
  this._patch(template);
  this.yat = new YatDocument();
}

Proxy.prototype._patch = function (keys) {
  var el = this;

  Object.keys(keys).forEach(function(key) {
    if (key !== 'tree') el[key] = keys[key];
  });
};

Proxy.prototype.first = function (query) {
  return this.yat.first(query);
};

Proxy.prototype.where = function (query) {
  return this.yat.where(query);
};

Proxy.prototype.append = function (child, sync) {
  var proxy = this;
  sync = typeof sync === 'undefined' ? true : sync;

  if (Array.isArray(child)) {
    child.forEach(function (c) { proxy.append(c, false); });
  } else if (child instanceof Proxy) {
    this.data.push(child.ui);
    if (child.yat.registry.indexOf(this.yat) === -1) child.yat.push(this.yat);
  } else if (child instanceof YatDocument) {
    var subyat = child;
    subyat.where().forEach(function (el) {
      proxy.yat.registry.push(el);
    });
    this.append(subyat.first());
  } else if (typeof child === 'object' && child.hasOwnProperty('el')) {
    var subyat = new YatDocument();
    subyat.parse(child);
    this.append(subyat);
  } else {
    var cproxy = new Proxy();
    cproxy.ui = child;
    this.append(cproxy);
  }

  if (sync && typeof this.sync === 'function') this.sync();
  return this;
};

Proxy.prototype.sync = function () {
  var el = this;

  this.data.forEach(function (ui) {
    el.ui.add(ui);
  });

  this.data = [];
};

Proxy.prototype.attr = function (key, value) {
  var setter = 'set' + key.replace(/^[a-z]/, function(m){ return m.toUpperCase(); });

  if (Proxy._setter === 'setter' && typeof this.ui[setter] === 'function') {
    this.ui[setter](value);
  } else {
    this.ui[key] = value;
  }

  return this;
};

Proxy.prototype.on = function (evt, cb) {
  this.ui.addEventListener(evt, cb);
  return this;
};

Proxy.prototype.trigger = function (evt, args) {
  this.ui.fireEvent(evt, args);
  return this;
};

Proxy.prototype.off = function (evt, cb) {
  this.ui.removeEventListener(evt, cb);
  return this;
};

Proxy._setter = 'setter';

Proxy.extend = extend;
module.exports = Proxy;