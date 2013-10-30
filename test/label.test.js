var Ti = require('titanium-namespace');
var assert = require("assert")
var LabelElement = require('../lib/el/label')

describe('label', function () {
  
  it('should create correct UI type', function () {
    var el = new LabelElement;
    el.create({});

    assert.equal('Titanium.UI.Label', el.ui._type);
  });
  

});