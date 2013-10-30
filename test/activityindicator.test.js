var Ti = require('titanium-namespace');
var assert = require("assert")
var ActivityIndicatorElement = require('../lib/el/activityindicator')

describe('activityindicator', function () {
  
  it('should create correct UI type', function () {
    var el = new ActivityIndicatorElement;
    el.create({});

    assert.equal('Titanium.UI.ActivityIndicator', el.ui._type);
  });
  

});