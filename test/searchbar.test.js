var Ti = require('titanium-namespace');
var assert = require("assert")
var eltool = require('./lib/el');

describe('searchbar', function () {
  
  it('should create correct UI type', function () {
    assert.equal('Titanium.UI.SearchBar', eltool.create('searchbar').ui._type);
  });
  

  it('should give a blur() proxy', function () {
    var data = eltool.fakeProxy(eltool.create('searchbar'), 'blur');

    assert.equal(true, data['blur:called']);
    assert.equal(true, data['callback:called']);
  });
  

  it('should give a focus() proxy', function () {
    var data = eltool.fakeProxy(eltool.create('searchbar'), 'focus');

    assert.equal(true, data['focus:called']);
    assert.equal(true, data['callback:called']);
  });
  

});