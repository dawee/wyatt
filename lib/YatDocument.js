function YatDocument(types) {
    this.types = types;
    this.stack = [];
}

YatDocument.prototype.filter = function (rules) {
    var elements = [];

    this.stack.forEach(function (element) {
        var matched = rules.every(function (rule) {
            return element['_' + rule.name] === rule.value;
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

YatDocument.prototype.element = function (type, template) {
    if (!this.types.hasOwnProperty(type)) throw 'Unknown UI type : "' + type + '"';
    var ElementType = this.types[type],
    
    // Create element following the given types relation
    element = new ElementType();
    element.patch({_type: type});
    element.patch(template);
    element.create(template);
    
    // Register for future queries
    this.stack.push(element);
    return element;
};

YatDocument.prototype.each = function (template, cb) {
    Object.keys(template).forEach(function (key) {
        if (key.match(/^[A-Z]\w+$/)) {
            cb(key, template[key]);
        }
    });
};

YatDocument.prototype.scan = function (parent, template) {
    var yat = this;

    yat.each(template, function (type, subtemplate) {
        var element = yat.element(type, subtemplate);

        // Append the element to the given parent
        if (parent !== null) parent.ui.add(element.ui);

        // Scan element to find children
        yat.scan(element, subtemplate);
    });
};

YatDocument.prototype.parse = function (template) {
    this.scan(null, template);
    return this;
};

module.exports = YatDocument;