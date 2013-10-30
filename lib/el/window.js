var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var WindowElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createWindow(options);
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

module.exports = WindowElement;