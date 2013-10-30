var Ti = require('titanium-namespace');
var assert = require("assert")
var WindowElement = require('../lib/el/window')

describe('window', function () {
  
  it('should create correct UI type', function () {
    var el = new WindowElement;
    el.create({});

    assert.equal('Titanium.UI.Window', el.ui._type);
  });
  

  it('should give a close() proxy', function () {
    var el = new WindowElement;
    var data = {};
    el.create({});

    el.ui.close = function () {
      data['close:called'] = true;
      el.ui.fireEvent('close');
    };

    el.close(function () {
      data['callback:called'] = true;
    });

    assert.equal(true, data['close:called']);
    assert.equal(true, data['callback:called']);
  });
  

  it('should give a open() proxy', function () {
    var el = new WindowElement;
    var data = {};
    el.create({});

    el.ui.open = function () {
      data['open:called'] = true;
      el.ui.fireEvent('open');
    };

    el.open(function () {
      data['callback:called'] = true;
    });

    assert.equal(true, data['open:called']);
    assert.equal(true, data['callback:called']);
  });
  

});