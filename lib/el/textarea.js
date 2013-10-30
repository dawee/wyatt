
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var TextAreaElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createTextArea(options);
  },

  blur: function (cb) {
    if (cb) this.on('blur', cb);
    this.ui.blur();
  },

  focus: function (cb) {
    if (cb) this.on('focus', cb);
    this.ui.focus();
  }

});

module.exports = TextAreaElement;
