var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var TableViewElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createTableView(options);
  },

  sync: function () {
    this.attr('data', this.data);
    this.data = [];
  }

});

module.exports = TableViewElement;
