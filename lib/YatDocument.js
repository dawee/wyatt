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

YatDocument.prototype.first = function (query) {
    return this.query(query)[0];
};

YatDocument.prototype.splinto = function (template) {
    var splitted = {specials: {}, properties: {}};

    Object.keys(template).forEach(function (key) {
        if (key.match(/^@/)) {
            splitted.specials[key.replace(/^@/, '')] = template[key];
        } else {
            splitted.properties[key] = template[key];
        }
    });

    return splitted;
};

YatDocument.prototype.element = function (template) {
    var type = template['@type'];

    if (!this.types.hasOwnProperty(type)) throw 'Unknown UI type : "' + type + '"';

    var ElementType = this.types[type],
        element = new ElementType(),
        splitted = this.splinto(template);

    element.patch(splitted.specials);
    element.create(splitted.properties);
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
        if (typeof template['@children'] !== 'undefined') yat.scan(element, template['@children']);
    });
};

YatDocument.prototype.parse = function (template) {
    this.scan(null, template);
    return this;
};

module.exports = YatDocument;