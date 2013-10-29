var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var TextFieldElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createTextField(options);
  }

});

module.exports = TextFieldElement;