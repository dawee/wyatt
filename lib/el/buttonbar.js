
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var ButtonbarElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createButtonBar(options);
  },

});

module.exports = ButtonbarElement;
