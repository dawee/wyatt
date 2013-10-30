
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var WebViewElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createWebView(options);
  },

});

module.exports = WebViewElement;
