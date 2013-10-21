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
    {"element": "label"}
  ]
});


exports['is generated type ok ?'] = function(beforeExit, assert) {
  assert.equal('Titanium.UI.View', yat.first({element: 'view'}).ui._type);
};

exports['is tree length correct ?'] = function(beforeExit, assert) {
  assert.equal(2, yat.first({element: 'view'}).ui.children.length);
};

exports['is options passed ?'] = function(beforeExit, assert) {
  assert.equal(200, yat.first({element: 'view'}).ui.width);
};
