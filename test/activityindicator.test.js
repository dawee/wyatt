var Ti = require('titanium-namespace');
var assert = require("assert")
var ActivityIndicatorElement = require('../lib/el/activityindicator')

describe('activityindicator', function () {
  
  it('should create correct UI type', function () {
    var el = new ActivityIndicatorElement;
    el.create({});

    assert.equal('Titanium.UI.ActivityIndicator', el.ui._type);
  });
  

  it('should give a add() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a addEventListener() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a applyProperties() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a fireEvent() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a hide() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a remove() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a removeEventListener() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a show() proxy', function () {
    throw 'This test is not written.'
  });
  

});