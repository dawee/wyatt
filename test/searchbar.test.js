var Ti = require('titanium-namespace');
var assert = require("assert")
var SearchBarElement = require('../lib/el/searchbar')

describe('searchbar', function () {
  
  it('should create correct UI type', function () {
    var el = new SearchBarElement;
    el.create({});

    assert.equal('Titanium.UI.SearchBar', el.ui._type);
  });
  

  it('should give a blur() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a focus() proxy', function () {
    throw 'This test is not written.'
  });
  

});