var Ti = require('titanium-namespace');
var assert = require("assert");
var logger = require('../lib/logger');
var Proxy = require('../lib/proxy');
var wyatt = require('..');

Proxy._setter = 'patch';

describe('Proxy', function () {
  
  it('should set backgroundColor to "green"', function () {
    var proxy = new Proxy();

    proxy.ui = Ti.UI.createView();
    assert.equal('green', proxy.attr('backgroundColor', 'green').ui.backgroundColor);
  });


  it('should manages dynamics append', function () {
    var proxy = new Proxy();

    proxy.ui = Ti.UI.createView();
    proxy.append({el: 'view'})
    assert.equal(1, proxy.where().length);
  });

  it('should manages dynamics append of a yat document', function () {
    var proxy = new Proxy();

    proxy.ui = Ti.UI.createView();
    proxy.append(wyatt.yat({el: 'view', tree: [{el: 'view'}]}));
    assert.equal(2, proxy.where().length);
  });

});