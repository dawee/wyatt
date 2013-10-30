
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var TabElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createTab(options);
  },

});

module.exports = TabElement;
