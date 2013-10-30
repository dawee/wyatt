var Ti = require('titanium-namespace');
var assert = require("assert")
var TableViewSectionElement = require('../lib/el/tableviewsection')

describe('tableviewsection', function () {
  
  it('should create correct UI type', function () {
    var el = new TableViewSectionElement;
    el.create({});

    assert.equal('Titanium.UI.TableViewSection', el.ui._type);
  });
  

  it('should give a rowAtIndex() proxy', function () {
    throw 'This test is not written.'
  });
  

});