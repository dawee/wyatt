var Ti = require('titanium-namespace');
var assert = require("assert")
var ImageViewElement = require('../lib/el/imageview')

describe('imageview', function () {
  
  it('should create correct UI type', function () {
    var el = new ImageViewElement;
    el.create({});

    assert.equal('Titanium.UI.ImageView', el.ui._type);
  });
  

  it('should give a pause() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a resume() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a start() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a stop() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a toBlob() proxy', function () {
    throw 'This test is not written.'
  });
  

});