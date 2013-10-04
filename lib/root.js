var generator = require('./generator');

function Root(dom) {
    this.dom = dom;
    this.ids = {};
}

Root.prototype.parse = function () {
    for (index = 0; index < this.dom.documentElement.childNodes.length; index += 1) {
        var item = this.dom.documentElement.childNodes.item(index);
        if (item.nodeType === item.ELEMENT_NODE) {
            child = generator.getGenerator(
                this.dom.documentElement.childNodes.item(index), this
            );
            child.proceed();
        }
    }

    return this;
};

Root.prototype.registerId = function (id, gen) {
    this.ids[id] = gen;
};

Root.prototype.select = function (selector) {
    var ux = null;

    if (selector.match(/^\#[\w\-\_]+$/) && this.ids.hasOwnProperty(selector.replace('#', ''))) {
        ux = this.ids[selector.replace('#', '')].ux;
    } else {
        throw 'EarpError : Unrecognized selector "' + selector + '"';
    }

    return ux;
};

module.exports = Root;