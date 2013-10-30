
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var ProgressbarElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createProgressBar(options);
  },

});

module.exports = ProgressbarElement;
