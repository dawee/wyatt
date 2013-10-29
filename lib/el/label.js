var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var LabelElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createLabel(options);
  }

});

module.exports = LabelElement;