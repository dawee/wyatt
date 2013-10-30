var Ti = require('titanium-namespace');
var assert = require("assert")
var TextFieldElement = require('../lib/el/textfield')

describe('textfield', function () {
  
  it('should create correct UI type', function () {
    var el = new TextFieldElement;
    el.create({});

    assert.equal('Titanium.UI.TextField', el.ui._type);
  });
  

  it('should give a blur() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a focus() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a hasText() proxy', function () {
    throw 'This test is not written.'
  });
  

});