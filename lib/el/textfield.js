var Ti = require('titanium-namespace');
var ViewElement = require('./view');

var TextFieldElement = ViewElement.extend({

  create: function (options) {
    this.ui = Ti.UI.createTextField(options);
  }

});

module.exports = TextFieldElement;