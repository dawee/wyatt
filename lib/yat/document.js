var YatQuery = require('./query');

function YatDocument() {
  this.stack = [];
  this.types = module._types;
  this.registry = [];
}

YatDocument.prototype.where = function (query) {
  return new YatQuery({registry: this.registry}).search(query);
};

YatDocument.prototype.first = function (query) {
  return new YatQuery({registry: this.registry, limit: 1}).search(query)[0];
};

YatDocument.prototype.el = function (template, yat) {
  var type = template.el || 'view';

  if (!this.types.hasOwnProperty(type.toLowerCase())) throw 'Unknown el : "' + type + '"';

  var ElementType = this.types[type.toLowerCase()];
  var el = new ElementType(template, yat);

  el.create(template.options || {});
  this.index(el);
  return el;
};

YatDocument.prototype.index = function (el) {
  // add to current registry
  this.registry.push(el);

  // add to parent registries
  this.stack.forEach(function (yat) {
    yat.registry.push(el);
  });
};

YatDocument.prototype.push = function () {
  this.stack = this.stack.concat.apply(this.stack, Array.prototype.slice.call(arguments));
};

YatDocument.prototype.scan = function (parent, tree) {
  var yat = this;

  tree.forEach(function (template, index) {
    var el = yat.el(template);
    var subyat = el.yat;

    if (parent) parent.append(el, index === tree.length - 1, false);
    if (!parent) subyat.push([].concat(yat.stack, [yat]));
    if (typeof template.tree !== 'undefined') subyat.scan(el, template.tree);
  });

  return this;
};

YatDocument.prototype.parse = function (template, parent) {
  var tree = Array.isArray(template) ? template : [template];

  this.scan(parent || null, tree);
  return this;
};

YatDocument.register = function (type, element) {
  module._types = typeof module._types === 'undefined' ? {} : module._types;
  module._types[type] = element;
};

YatDocument.el = function (type) {
  return module._types.hasOwnProperty(type) ? module._types[type] : null;
};

module.exports = YatDocument;