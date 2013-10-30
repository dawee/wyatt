
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var TableViewElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createTableView(options);
  },

});

module.exports = TableViewElement;
