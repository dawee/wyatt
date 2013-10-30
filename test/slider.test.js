var Ti = require('titanium-namespace');
var assert = require("assert")
var SliderElement = require('../lib/el/slider')

describe('slider', function () {
  
  it('should create correct UI type', function () {
    var el = new SliderElement;
    el.create({});

    assert.equal('Titanium.UI.Slider', el.ui._type);
  });
  

});