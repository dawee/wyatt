
var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var SliderElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createSlider(options);
  },

});

module.exports = SliderElement;
