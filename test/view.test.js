var Ti = require('titanium-namespace');
var assert = require("assert")
var ViewElement = require('../lib/el/view')

describe('view', function () {
  
  it('should create correct UI type', function () {
    var el = new ViewElement;
    el.create({});

    assert.equal('Titanium.UI.View', el.ui._type);
  });
  

});