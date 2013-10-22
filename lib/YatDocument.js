function YatDocument(types, stack) {
  this.stack = stack || [];
  this.types = types;
  this.registry = [];
}

YatDocument.prototype._isYatDocument = true;

YatDocument.prototype.filter = function (rules) {
  var elements = [];

  this.registry.forEach(function (element) {
    var matched = rules.every(function (rule) {
      return element[rule.name] === rule.value;
    });

    if (matched) elements.push(element);
  });

  return elements;
};

YatDocument.prototype.query = function (query) {
  return this.filter(Object.keys(query || {}).map(function (k) {
    return {name: k, value: query[k]};
  }));
};
YatDocument.prototype.any = YatDocument.prototype.query;

YatDocument.prototype.first = function (query) {
  return this.query(query)[0];
};

YatDocument.prototype.element = function (template, yat) {
  var type = template.element || 'view';

  if (!this.types.hasOwnProperty(type.toLowerCase())) throw 'Unknown element : "' + type + '"';

  var ElementType = this.types[type.toLowerCase()],
      element = new ElementType(template, yat);

  // Register for future queries
  this.stack.forEach(function (registry) {
    registry.push(element);
  });
  return element;
};

YatDocument.prototype.scan = function (parent, tree) {
  var yat = this;

  this.stack.push(this.registry);

  tree.forEach(function (template) {
    var subyat = new YatDocument(yat.types, yat.stack);
    var element = yat.element(template, subyat);
    // Append the element to the given parent
    if (parent !== null) parent.ui.add(element.ui);
    if (typeof template.tree !== 'undefined') subyat.scan(element, template.tree);
  });

  return this;
};

YatDocument.prototype.parse = function (template, parent) {
  var tree = Array.isArray(template) ? template : [template];

  this.scan(parent || null, tree);
  return this;
};

module.exports = YatDocument;