var YatQuery = require('./query');

function YatDocument(types, stack) {
  this.stack = stack || [];
  this.types = types;
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
  this.stack.forEach(function (registry) {
    registry.push(el);
  });

  return el;
};

YatDocument.prototype.scan = function (parent, tree) {
  var yat = this;

  this.stack.push(this.registry);

  tree.forEach(function (template, index) {
    var subyat = new YatDocument(yat.types, yat.stack);
    var el = yat.el(template, subyat);

    if (parent) parent.append(el, index === tree.length - 1);
    if (typeof template.tree !== 'undefined') subyat.scan(el, template.tree);
  });

  if (parent && typeof parent.sync === 'function') parent.sync();
  return this;
};

YatDocument.prototype.parse = function (template, parent) {
  var tree = Array.isArray(template) ? template : [template];

  this.scan(parent || null, tree);
  return this;
};

module.exports = YatDocument;