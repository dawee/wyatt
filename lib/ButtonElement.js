var Ti = require('titanium-namespace');
var ViewElement = require('./ViewElement');

var ButtonElement = ViewElement.extend({

    create: function (options) {
        this.ui = Ti.UI.createButton(options);
    }

});

module.exports = ButtonElement;