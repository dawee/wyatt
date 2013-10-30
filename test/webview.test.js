var Ti = require('titanium-namespace');
var assert = require("assert")
var WebViewElement = require('../lib/el/webview')

describe('webview', function () {
  
  it('should create correct UI type', function () {
    var el = new WebViewElement;
    el.create({});

    assert.equal('Titanium.UI.WebView', el.ui._type);
  });
  
});