var Ti = require('titanium-namespace');
var assert = require("assert")
var WebViewElement = require('../lib/el/webview')

describe('webview', function () {
  
  it('should create correct UI type', function () {
    var el = new WebViewElement;
    el.create({});

    assert.equal('Titanium.UI.WebView', el.ui._type);
  });
  

  it('should give a canGoBack() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a canGoForward() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a evalJS() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a goBack() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a goForward() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a pause() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a release() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a reload() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a repaint() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a resume() proxy', function () {
    throw 'This test is not written.'
  });
  

  it('should give a stopLoading() proxy', function () {
    throw 'This test is not written.'
  });
  

});