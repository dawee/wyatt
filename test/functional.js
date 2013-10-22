var Ti = require('titanium-namespace');
var wyatt = require('../wyatt.mockti');
var yat = wyatt.yat({
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
});


exports['is generated view type ok ?'] = function(beforeExit, assert) {
  assert.equal('Titanium.UI.View', yat.first({el: 'view'}).ui._type);
};

exports['is generated textfield type ok ?'] = function(beforeExit, assert) {
  assert.equal('Titanium.UI.TextField', yat.first({el: 'textfield'}).ui._type);
};

exports['is tree length correct ?'] = function(beforeExit, assert) {
  assert.equal(2, yat.any({el: 'view'}).length);
};

exports['are ti.ui children added ?'] = function(beforeExit, assert) {
  assert.equal(4, yat.first({el: 'view'}).ui.children.length);
};

exports['is options passed ?'] = function(beforeExit, assert) {
  assert.equal(200, yat.first({el: 'view'}).ui.width);
};

exports['are subqueries working ?'] = function(beforeExit, assert) {
  assert.equal(1, yat.first({el: 'view'}).any({el: 'view'}).length);
};
