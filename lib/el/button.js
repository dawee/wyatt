var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var ButtonElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createButton(options);
  }

});

module.exports = ButtonElement;