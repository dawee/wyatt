var dom = require('com.github.dawicorti.wyatt');
var elementTypes = {};

require('string').extendPrototype();

elementTypes.view = require('./ViewElement');
elementTypes.window = require('./WindowElement');
elementTypes.label = require('./LabelElement');
elementTypes.button = require('./ButtonElement');

function Generator() {
    this.nodeIds = {};
}

Generator.prototype.parse = function (path, cb) {
    var that = this;

    this.genId = dom.createGenerator();
    dom.parse(
        this.genId,
        path,
        function (options) {
            that.factory(options);
        },
        function () {
            cb(function (selector) {
                return that.select(selector);
            });
        }
    );
};

Generator.prototype.select = function (selector) {
    var nodeId = dom.select(this.genId, selector);

    if (this.nodeIds.hasOwnProperty(nodeId)) {
        return this.nodeIds[nodeId];
    }
};

Generator.prototype.sanitize = function (options) {
    var sanitized = {};

    Object.keys(options).forEach(function (key) {
        if (['nodeId', 'parendId', 'nodeName'].indexOf(key) === -1) {
            var value = options[key];

            if (key.match(/^\w+\-\w+$/)) {
                key = key.split('-')[0] + key.split('-')[1].capitalize();
            }

            sanitized[key] = value;
        }
    });

    return sanitized;
};

Generator.prototype.factory = function (options) {
    if (elementTypes.hasOwnProperty(options.nodeName)) {
        var ElementType = elementTypes[options.nodeName], 
            element = new ElementType();

        element.create(this.sanitize(options));

        if (this.nodeIds.hasOwnProperty(options.parentId)) {
            var parent = this.nodeIds[options.parentId];

            parent.append(element);
        }

        this.nodeIds[options.nodeId] = element;
    }
};

module.exports = Generator;