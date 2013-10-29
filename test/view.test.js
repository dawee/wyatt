var Ti = require('titanium-namespace');
var wyatt = require('..');
var assert = require("assert")
var content = require('./fixtures/eggspam.yat');

describe('View Element', function () {
  
  it('should create a Ti.UI.View type', function () {
    assert.equal('Titanium.UI.View', wyatt.yat(content).first({el: 'view'}).ui._type);
  });

  it('should have 4 children', function () {
    assert.equal(4, wyatt.yat(content).first({el: 'view'}).ui.children.length);
  });

});