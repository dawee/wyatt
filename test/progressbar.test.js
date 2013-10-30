var Ti = require('titanium-namespace');
var assert = require("assert")
var ProgressBarElement = require('../lib/el/progressbar')

describe('progressbar', function () {
  
  it('should create correct UI type', function () {
    var el = new ProgressBarElement;
    el.create({});

    assert.equal('Titanium.UI.ProgressBar', el.ui._type);
  });
  

});