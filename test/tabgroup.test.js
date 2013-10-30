var Ti = require('titanium-namespace');
var assert = require("assert")
var TabGroupElement = require('../lib/el/tabgroup')

describe('tabgroup', function () {
  
  it('should create correct UI type', function () {
    var el = new TabGroupElement;
    el.create({});

    assert.equal('Titanium.UI.TabGroup', el.ui._type);
  });
  

  it('should give a close() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a open() proxy', function () {
    throw 'This test is not written.'
  });
  

});