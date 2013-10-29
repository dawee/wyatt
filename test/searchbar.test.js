var Ti = require('titanium-namespace');
var assert = require("assert")
var SearchBarElement = require('../lib/el/searchbar')

describe('searchbar', function () {
  
  it('should create correct UI type', function () {
    var el = new SearchBarElement;
    el.create({});

    assert.equal('Titanium.UI.SearchBar', el.ui._type);
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
  

  it('should give a blur() proxy', function () {
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
  

  it('should give a focus() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a hide() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a remove() proxy', function () {
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