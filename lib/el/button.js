var Ti = require('titanium-namespace');
var ViewElement = require('./view');

var ButtonElement = ViewElement.extend({

  create: function (options) {
    this.ui = Ti.UI.createButton(options);
  }

});

module.exports = ButtonElement;