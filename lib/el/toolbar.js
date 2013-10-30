
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var ToolbarElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createToolbar(options);
  },

});

module.exports = ToolbarElement;
