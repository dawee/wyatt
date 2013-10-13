var extend = require('extendable');

function ViewElement() {}
ViewElement.prototype = {
    
    create: function (options) {
        console.log('creating view with', options);
        this.ui = Titanium.UI.createView(options);
    },

    append: function (el) {
        this.ui.add(el.ui);
    },

    click: function (cb) {
        this.ui.addEventListener('click', cb);
    }
};

ViewElement.extend = extend;

module.exports = ViewElement;