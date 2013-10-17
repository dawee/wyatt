var Ti = require('titanium-namespace');
var wyatt = require('../wyatt.mockti');

exports['test generated type'] = function(beforeExit, assert) {
    var yat = wyatt.yat({'@type': 'View'});

    assert.equal('Titanium.UI.View', yat.first({type: 'View'})[0]._type);
};
