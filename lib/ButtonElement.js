var ViewElement = require('./ViewElement');

var ButtonElement = ViewElement.extend({

    create: function (options) {
        this.ui = Titanium.UI.createButton(options);
    }

});

module.exports = ButtonElement;