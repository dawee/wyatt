
var Generator = require('./lib/Generator');

module.exports = {
    render: function (path, cb) {
        var generator = new Generator();
        generator.parse(path, cb);
    }
};