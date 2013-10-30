var wyatt = module.exports = require('./lib/wyatt');
var natives = {
  'window': require('./lib/el/window'),
  'label': require('./lib/el/label'),
  'view': require('./lib/el/view'),
  'button': require('./lib/el/button'),
  'imageview': require('./lib/el/imageview'),
  'textfield': require('./lib/el/textfield'),
  'activityindicator': require('./lib/el/activityindicator'),
  'buttonbar': require('./lib/el/buttonbar'),
  'progressbar': require('./lib/el/progressbar'),
  'scrollview': require('./lib/el/scrollview'),
  'searchbar': require('./lib/el/searchbar'),
  'slider': require('./lib/el/slider'),
  'switch': require('./lib/el/switch'),
  'tab': require('./lib/el/tab'),
  'tabgroup': require('./lib/el/tabgroup'),
  'tabbedbar': require('./lib/el/tabbedbar'),
  'tableview': require('./lib/el/tableview'),
  'tableviewrow': require('./lib/el/tableviewrow'),
  'tableviewsection': require('./lib/el/tableviewsection'),
  'textarea': require('./lib/el/textarea'),
  'toolbar': require('./lib/el/toolbar'),
  'webview': require('./lib/el/webview')
};

Object.keys(natives).forEach(function (el) {
  wyatt.register(el, natives[el]);
});