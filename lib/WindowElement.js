var ViewElement = require('./ViewElement');

var WindowElement = ViewElement.extend({

    create: function (options) {
        this.ui = Titanium.UI.createWindow(options);
    },

    open: function () {
        this.ui.open();
    }

});

module.exports = WindowElement;