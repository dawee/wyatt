var Ti = require('titanium-namespace');
var assert = require("assert")
var eltool = require('./lib/el');

describe('tab', function () {
  
  it('should create correct UI type', function () {
    assert.equal('Titanium.UI.Tab', eltool.create('tab').ui._type);
  });
  

  it('should give a close() proxy', function () {
    var data = eltool.fakeProxy(eltool.create('tab'), 'close');

    assert.equal(true, data['close:called']);
    assert.equal(true, data['callback:called']);
  });
  

  it('should give a open() proxy', function () {
    var data = eltool.fakeProxy(eltool.create('tab'), 'open');

    assert.equal(true, data['open:called']);
    assert.equal(true, data['callback:called']);
  });
  

});