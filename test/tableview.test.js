var Ti = require('titanium-namespace');
var assert = require("assert")
var TableViewElement = require('../lib/el/tableview')

describe('tableview', function () {
  
  it('should create correct UI type', function () {
    var el = new TableViewElement;
    el.create({});

    assert.equal('Titanium.UI.TableView', el.ui._type);
  });
  

  it('should give a appendRow() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a appendSection() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a deleteRow() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a deleteSection() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a deselectRow() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a insertRowAfter() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a insertRowBefore() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a insertSectionAfter() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a insertSectionBefore() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a scrollToIndex() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a scrollToTop() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a selectRow() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a updateRow() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a updateSection() proxy', function () {
    throw 'This test is not written.'
  });
  

});