var Ti = require('titanium-namespace');
var assert = require("assert")
var eltool = require('./lib/el');

describe('imageview', function () {
  
  it('should create correct UI type', function () {
    assert.equal('Titanium.UI.ImageView', eltool.create('imageview').ui._type);
  });

  it('should give a pause() proxy', function () {
    var data = eltool.fakeProxy(eltool.create('imageview'), 'pause');

    assert.equal(true, data['pause:called']);
    assert.equal(true, data['callback:called']);
  });

  it('should give a resume() proxy', function () {
    var data = eltool.fakeProxy(eltool.create('imageview'), 'resume', 'start');

    assert.equal(true, data['resume:called']);
    assert.equal(true, data['callback:called']);
  });

  it('should give a start() proxy', function () {
    var data = eltool.fakeProxy(eltool.create('imageview'), 'start');

    assert.equal(true, data['start:called']);
    assert.equal(true, data['callback:called']);
  });

  it('should give a stop() proxy', function () {
    var data = eltool.fakeProxy(eltool.create('imageview'), 'stop');

    assert.equal(true, data['stop:called']);
    assert.equal(true, data['callback:called']);
  });

});