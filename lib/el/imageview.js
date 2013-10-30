var Ti = require('titanium-namespace');
var Proxy = require('../proxy');

var ImageElement = Proxy.extend({

  create: function (options) {
    this.ui = Ti.UI.createImageView(options);
  },

  start: function (cb) {
    if (cb) this.on('start', cb);
    this.ui.start();
  },

  pause: function (cb) {
    if (cb) this.on('pause', cb);
    this.ui.pause();
  },

  resume: function (cb) {
    if (cb) this.on('start', cb);
    this.ui.resume();
  },

  stop: function (cb) {
    if (cb) this.on('stop', cb);
    this.ui.stop();
  }

});

module.exports = ImageElement;