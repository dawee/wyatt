var Ti = require('titanium-namespace');
var assert = require("assert");
var logger = require('../lib/logger');
var Proxy = require('../lib/proxy');

Proxy._setter = 'patch';

describe('Proxy', function () {
  
  it('should set backgroundColor to "green"', function () {
    var proxy = new Proxy();

    proxy.ui = Ti.UI.createView();
    assert.equal('green', proxy.attr('backgroundColor', 'green').ui.backgroundColor);
  });

});