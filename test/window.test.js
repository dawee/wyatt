var Ti = require('titanium-namespace');
var assert = require("assert")
var eltool = require('./lib/el');

describe('window', function () {
  
  it('should create correct UI type', function () {
    assert.equal('Titanium.UI.Window', eltool.create('window').ui._type);
  });
  

  it('should give a close() proxy', function () {
    var data = eltool.fakeProxy(eltool.create('window'), 'close');

    assert.equal(true, data['close:called']);
    assert.equal(true, data['callback:called']);
  });
  

  it('should give a open() proxy', function () {
    var data = eltool.fakeProxy(eltool.create('window'), 'open');

    assert.equal(true, data['open:called']);
    assert.equal(true, data['callback:called']);
  });
  

});