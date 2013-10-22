var Ti = require('titanium-namespace');
var wyatt = require('../wyatt.mockti');
var yat = wyatt.yat({
  "element": 'view',
  "options": {
    "backgroundColor": "red",
    "width": 200
  },
  "tree": [
    {"element": "button"},
    {"element": "label"},
    {"element": "textfield"},
    {"element": "view"}
  ]
});


exports['is generated view type ok ?'] = function(beforeExit, assert) {
  assert.equal('Titanium.UI.View', yat.first({element: 'view'}).ui._type);
};

exports['is generated textfield type ok ?'] = function(beforeExit, assert) {
  assert.equal('Titanium.UI.TextField', yat.first({element: 'textfield'}).ui._type);
};

exports['is tree length correct ?'] = function(beforeExit, assert) {
  assert.equal(2, yat.any({element: 'view'}).length);
};

exports['are ti.ui children added ?'] = function(beforeExit, assert) {
  assert.equal(4, yat.first({element: 'view'}).ui.children.length);
};

exports['is options passed ?'] = function(beforeExit, assert) {
  assert.equal(200, yat.first({element: 'view'}).ui.width);
};

exports['are subqueries working ?'] = function(beforeExit, assert) {
  assert.equal(1, yat.first({element: 'view'}).any({element: 'view'}).length);
};
