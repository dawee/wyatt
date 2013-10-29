var Ti = require('titanium-namespace');
var wyatt = require('../wyatt.mockti');
var content = {
  "el": 'view',
  "options": {
    "backgroundColor": "red",
    "width": 200
  },
  "tree": [
    {"el": "button"},
    {"el": "label"},
    {"el": "textfield"},
    {
      "el": "view",
      "egg": "spam",
      "eggegg": "spamspam"
    }
  ]
};


exports['test tree length'] = function(beforeExit, assert) {
  var yat = wyatt.yat(content);

  assert.equal(2, yat.where({el: 'view'}).length);
};

exports['test queries'] = function(beforeExit, assert) {
  var yat = wyatt.yat(content);

  assert.equal('spamspam', yat.first({el: 'view', egg: 'spam'}).eggegg);
};

exports['test generated element type'] = function(beforeExit, assert) {
  var yat = wyatt.yat(content);

  assert.equal(true, yat.first({el: 'view'}) instanceof wyatt.el('view'));
};

exports['test subqueries'] = function(beforeExit, assert) {
  var yat = wyatt.yat(content);

  assert.equal(1, yat.first({el: 'view'}).where({el: 'view'}).length);
};
