
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var TextAreaElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createTextArea(options);
  },

});

module.exports = TextAreaElement;
