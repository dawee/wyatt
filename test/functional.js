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
    {"element": "textfield"}
  ]
});


exports['is generated view type ok ?'] = function(beforeExit, assert) {
  assert.equal('Titanium.UI.View', yat.first({element: 'view'}).ui._type);
};

exports['is generated textfield type ok ?'] = function(beforeExit, assert) {
  assert.equal('Titanium.UI.TextField', yat.first({element: 'textfield'}).ui._type);
};


exports['is tree length correct ?'] = function(beforeExit, assert) {
  assert.equal(3, yat.first({element: 'view'}).ui.children.length);
};

exports['is options passed ?'] = function(beforeExit, assert) {
  assert.equal(200, yat.first({element: 'view'}).ui.width);
};
