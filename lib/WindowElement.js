var Ti = require('titanium-namespace');
var ViewElement = require('./ViewElement');

var WindowElement = ViewElement.extend({

  create: function (options) {
    this.ui = Ti.UI.createWindow(options);
  },

  open: function (cb) {
    if (cb) this.ui.addEventListener('open', cb);
    this.ui.open();
  }

});

module.exports = WindowElement;