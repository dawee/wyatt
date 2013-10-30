var Ti = require('titanium-namespace');
var assert = require("assert")
var ButtonElement = require('../lib/el/button')

describe('button', function () {
  
  it('should create correct UI type', function () {
    var el = new ButtonElement;
    el.create({});

    assert.equal('Titanium.UI.Button', el.ui._type);
  });
  

});