var Ti = require('titanium-namespace');
var assert = require("assert")
var ToolbarElement = require('../lib/el/toolbar')

describe('toolbar', function () {
  
  it('should create correct UI type', function () {
    var el = new ToolbarElement;
    el.create({});

    assert.equal('Titanium.UI.Toolbar', el.ui._type);
  });
  

});