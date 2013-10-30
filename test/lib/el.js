var util = require('util');

exports.create = function (el) {
    var El = require(util.format('../../lib/el/%s', el));
    var el = new El;
    el.create({});
    return el;
};

exports.fakeProxy = function (el, method, evt) {
  evt = evt || method;
  var data = {};

  el.ui[method] = function () {
    data[util.format('%s:called', method)] = true;
    el.ui.fireEvent(evt);
  };

  el[method](function () {
    data['callback:called'] = true;
  });

  return data;
};