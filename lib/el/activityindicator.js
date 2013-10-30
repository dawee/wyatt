
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var ActivityindicatorElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createActivityIndicator(options);
  },

});

module.exports = ActivityindicatorElement;
