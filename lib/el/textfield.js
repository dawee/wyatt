var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var TextFieldElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createTextField(options);
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

module.exports = TextFieldElement;