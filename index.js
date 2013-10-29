var wyatt = module.exports = require('./lib/wyatt');
var natives = [
  'window',
  'label',
  'view',
  'button',
  'imageview',
  'textfield',
  'activityindicator',
  'buttonbar',
  'progressbar',
  'scrollview',
  'searchbar',
  'slider',
  'switch',
  'tab',
  'tabgroup',
  'tabbedbar',
  'tableview',
  'tableviewrow',
  'tableviewsection',
  'textarea',
  'toolbar',
  'webview'
];

natives.forEach(function (el) {
  wyatt.register(el, require('./lib/el/' + el));
});