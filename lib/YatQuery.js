function YatQuery(options) {
  this.registry = options.registry;
  this.limit = options.limit || null;
}

function sanitize(rules) {
  return typeof rules === 'string' ? {el: rules} : rules;
}

YatQuery.prototype.match = function (el, rules) {
  rules = sanitize(rules);

  return Object.keys(rules).every(function (key) {
    return rules[key] === el[key];
  });
};

YatQuery.prototype.search = function (rules) {
  var query = this;
  var elements = [];

  this.registry.every(function (el) {
    var more = true;

    if (query.match(el, rules)) elements.push(el);
    if (query.limit && elements.length === query.limit) more = false;
    return more;
  });

  return elements;
};

module.exports = YatQuery;