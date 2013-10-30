var Ti = require('titanium-namespace');
var assert = require("assert")
var eltool = require('./lib/el');
var Proxy = require('../lib/proxy');

Proxy._setter = 'patch';

describe('tableview', function () {
  
  it('should create correct UI type', function () {
    assert.equal('Titanium.UI.TableView', eltool.create('tableview').ui._type);
  });
  

  it('should manage data', function () {
    var el = eltool.create('tableview');
    el.append([
      eltool.create('tableviewrow'),
      eltool.create('tableviewrow'),
      eltool.create('tableviewrow'),
    ]);

    assert.equal(3, el.ui.data.length);
  });

  

});