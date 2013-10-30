var Ti = require('titanium-namespace');
var assert = require("assert")
var SwitchElement = require('../lib/el/switch')

describe('switch', function () {
  
  it('should create correct UI type', function () {
    var el = new SwitchElement;
    el.create({});

    assert.equal('Titanium.UI.Switch', el.ui._type);
  });
  

});