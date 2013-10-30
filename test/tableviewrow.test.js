var Ti = require('titanium-namespace');
var assert = require("assert")
var TableViewRowElement = require('../lib/el/tableviewrow')

describe('tableviewrow', function () {
  
  it('should create correct UI type', function () {
    var el = new TableViewRowElement;
    el.create({});

    assert.equal('Titanium.UI.TableViewRow', el.ui._type);
  });
  

});