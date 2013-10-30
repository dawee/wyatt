
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var TableViewSectionElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createTableViewSection(options);
  },

});

module.exports = TableViewSectionElement;
