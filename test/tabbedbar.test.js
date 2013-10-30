var Ti = require('titanium-namespace');
var assert = require("assert")
var TabbedBarElement = require('../lib/el/tabbedbar')

describe('tabbedbar', function () {
  
  it('should create correct UI type', function () {
    var el = new TabbedBarElement;
    el.create({});

    assert.equal('Titanium.UI.TabbedBar', el.ui._type);
  });
  

});