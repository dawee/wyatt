var wyatt = require('wyatt');


var t0 = Date.now();
wyatt.render('app/template/home.yat', function (yat) {
    var delay = Date.now() - t0;
    alert(delay);
    yat('window').open();
});