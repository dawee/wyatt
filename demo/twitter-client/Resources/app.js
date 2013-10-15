var wyatt = require('wyatt');

var yat = wyatt.render('app/template/home.yat', {message: "Hello World !"});

yat.first({type: 'Window'}).open();