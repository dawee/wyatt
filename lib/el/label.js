var Ti = require('titanium-namespace');
var ViewElement = require('./view');

var LabelElement = ViewElement.extend({

  create: function (options) {
    this.ui = Ti.UI.createLabel(options);
  }

});

module.exports = LabelElement;