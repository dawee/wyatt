var Ti = require('titanium-namespace');
var assert = require("assert")
var TextAreaElement = require('../lib/el/textarea')

describe('textarea', function () {
  
  it('should create correct UI type', function () {
    var el = new TextAreaElement;
    el.create({});

    assert.equal('Titanium.UI.TextArea', el.ui._type);
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