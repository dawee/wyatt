var Ti = require('titanium-namespace');
var assert = require("assert")
var LabelElement = require('../lib/el/label')

describe('label', function () {
  
  it('should create correct UI type', function () {
    var el = new LabelElement;
    el.create({});

    assert.equal('Titanium.UI.Label', el.ui._type);
  });
  

  it('should give a add() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a addEventListener() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a animate() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a applyProperties() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a convertPointToView() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a finishLayout() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a fireEvent() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a hide() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a remove() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a removeAllChildren() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a removeEventListener() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a show() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a startLayout() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a toImage() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a updateLayout() proxy', function () {
    throw 'This test is not written.'
  });
  

});