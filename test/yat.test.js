var Ti = require('titanium-namespace');
var wyatt = require('..');
var assert = require("assert")
var content = require('./fixtures/eggspam.yat');

describe('Yat Document', function () {
  
  it('should find 2 views in tree', function () {
    assert.equal(2, wyatt.yat(content).where({el: 'view'}).length);
  });

  it('should get spamspam for eggegg key', function () {
    assert.equal('spamspam', wyatt.yat(content).first({el: 'view', egg: 'spam'}).eggegg);
  });

  it('should generate a ViewElement instance', function () {
    assert.equal(true, wyatt.yat(content).first({el: 'view'}) instanceof wyatt.el('view'));
  });

  it('should get the first view without any rule', function () {
    assert.equal(true, wyatt.yat(content).first() instanceof wyatt.el('view'));
  });

  it('test generated element type', function () {
    assert.equal(true, wyatt.yat(content).first({el: 'view'}) instanceof wyatt.el('view'));
  });

  it('test subqueries', function () {
    assert.equal(1, wyatt.yat(content).first({el: 'view'}).where({el: 'view'}).length);
  });

});