var Ti = require('titanium-namespace');
var Handlebars = require('handlebars');
var YatDocument = require('./yat/document');
var wyatt = module.exports = exports = {};

wyatt.compile = function (path) {
  var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, path),
    rawYat = file.read().toString();
  return Handlebars.compile(rawYat);
};

wyatt.template = function (path) {
  module._templates = typeof module._templates === 'undefined' ? {} : module._templates;
  return module._templates.hasOwnProperty(path) ? module._templates[path] : wyatt.compile(path);
};

wyatt.yat = function (template) {
  return new YatDocument(module._types).parse(template);
};

wyatt.render = function (path, ctx) {
  var template = wyatt.template(path)(ctx);
  return wyatt.yat(JSON.parse(template));
};

wyatt.register = function (type, element) {
  module._types = typeof module._types === 'undefined' ? {} : module._types;
  module._types[type] = element;
};

wyatt.el = function (type) {
  return module._types.hasOwnProperty(type) ? module._types[type] : null;
};
