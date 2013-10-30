
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var TabGroupElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createTabGroup(options);
  },

  open: function (cb) {
    if (cb) this.on('open', cb);
    this.ui.open();
  },

  close: function (cb) {
    if (cb) this.on('close', cb);
    this.ui.close();
  }

});

module.exports = TabGroupElement;
