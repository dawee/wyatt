
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var SearchbarElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createSearchBar(options);
  },

});

module.exports = SearchbarElement;
