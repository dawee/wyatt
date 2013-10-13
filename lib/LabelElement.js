var ViewElement = require('./ViewElement');

var LabelElement = ViewElement.extend({

    create: function (options) {
        this.ui = Titanium.UI.createLabel(options);
    }

});

module.exports = LabelElement;