var Ti = require('titanium-namespace');
var assert = require("assert")
var TabElement = require('../lib/el/tab')

describe('tab', function () {
  
  it('should create correct UI type', function () {
    var el = new TabElement;
    el.create({});

    assert.equal('Titanium.UI.Tab', el.ui._type);
  });
  

  it('should give a close() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a open() proxy', function () {
    throw 'This test is not written.'
  });
  

});