var Titanium = require('titanium-namespace');
var ViewElement = require('./ViewElement');

var ImageElement = ViewElement.extend({

    create: function (options) {
        this.ui = Titanium.UI.createImageView(options);
    },

    open: function () {
        this.ui.open();
    }

});

module.exports = ImageElement;