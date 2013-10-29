var Ti = require('titanium-namespace');
var ViewElement = require('./view');

var ImageElement = ViewElement.extend({

  create: function (options) {
    this.ui = Ti.UI.createImageView(options);
  },

});

module.exports = ImageElement;