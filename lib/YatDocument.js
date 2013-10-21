function YatDocument(types) {
  this.types = types;
  this.stack = [];
}

YatDocument.prototype.filter = function (rules) {
  var elements = [];

  this.stack.forEach(function (element) {
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
YatDocument.prototype.all = YatDocument.prototype.query;

YatDocument.prototype.first = function (query) {
  return this.query(query)[0];
};

YatDocument.prototype.element = function (template) {
  var type = template.element || 'view';

  if (!this.types.hasOwnProperty(type.toLowerCase())) throw 'Unknown element : "' + type + '"';

  var ElementType = this.types[type.toLowerCase()],
  element = new ElementType(template);

  // Register for future queries
  this.stack.push(element);
  return element;
};

YatDocument.prototype.scan = function (parent, tree) {
  var yat = this;

  tree.forEach(function (template) {
    var element = yat.element(template);
    // Append the element to the given parent
    if (parent !== null) parent.ui.add(element.ui);
    if (typeof template.tree !== 'undefined') yat.scan(element, template.tree);
  });
};

YatDocument.prototype.parse = function (template) {
  var tree = Array.isArray(template) ? template : [template];

  this.scan(null, tree);
  return this;
};

module.exports = YatDocument;