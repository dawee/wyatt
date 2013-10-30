
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var SwitchElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createSwitch(options);
  },

});

module.exports = SwitchElement;
