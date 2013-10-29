var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var WindowElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createWindow(options);
  },

  open: function (cb) {
    if (cb) this.ui.addEventListener('open', cb);
    this.ui.open();
  }

});

module.exports = WindowElement;