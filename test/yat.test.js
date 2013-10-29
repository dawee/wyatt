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
    {"el": "view"}
  ]
};


exports['test tree#length'] = function(beforeExit, assert) {
  var yat = wyatt.yat(content);

  assert.equal(2, yat.where({el: 'view'}).length);
};

exports['test subqueries'] = function(beforeExit, assert) {
  var yat = wyatt.yat(content);

  assert.equal(1, yat.first({el: 'view'}).where({el: 'view'}).length);
};
