
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var TableViewRowElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createTableViewRow(options);
  },

});

module.exports = TableViewRowElement;
