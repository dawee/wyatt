var Ti = require('titanium-namespace');
var assert = require("assert")
var ButtonBarElement = require('../lib/el/buttonbar')

describe('buttonbar', function () {
  
  it('should create correct UI type', function () {
    var el = new ButtonBarElement;
    el.create({});

    assert.equal('Titanium.UI.ButtonBar', el.ui._type);
  });
  

});