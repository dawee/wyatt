
var Generator = require('./lib/generator');

module.exports = {
    render: function (earpStr, cb) {
        var generator = new Generator();
        generator.parse(earpStr, cb);
    }
};