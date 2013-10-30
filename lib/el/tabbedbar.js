
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var TabbedbarElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createTabbedbar(options);
  },

});

module.exports = TabbedbarElement;
