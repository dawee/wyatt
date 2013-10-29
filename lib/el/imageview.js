var Ti = require('titanium-namespace');
var ViewElement = require('./view');

var ImageElement = ViewElement.extend({

  create: function (options) {
    this.ui = Ti.UI.createImageView(options);
  },

  open: function () {
    this.ui.open();
  }

});

module.exports = ImageElement;