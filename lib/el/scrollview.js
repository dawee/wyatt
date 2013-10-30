
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var ScrollviewElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createScrollView(options);
  },

});

module.exports = ScrollviewElement;
