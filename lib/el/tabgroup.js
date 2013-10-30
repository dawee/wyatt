
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var TabGroupElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createTabGroup(options);
  },

});

module.exports = TabGroupElement;
