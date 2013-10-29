var wyatt = module.exports = require('./lib/wyatt');
var natives = [
  'window',
  'label',
  'view',
  'button',
  'imageview',
  'textfield',
];

natives.forEach(function (el) {
  wyatt.register(el, require('./lib/el/' + el));
});