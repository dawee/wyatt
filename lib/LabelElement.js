var Ti = require('titanium-namespace');
var ViewElement = require('./ViewElement');

var LabelElement = ViewElement.extend({

  create: function (options) {
    this.ui = Ti.UI.createLabel(options);
  }

});

module.exports = LabelElement;