var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var ImageElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createImageView(options);
  },

});

module.exports = ImageElement;