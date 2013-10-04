var css = require('css');

function Layout(path) {
    this.path = path;
}

Layout.prototype.parse = function () {
    this.file = Titanium.Filesystem.getFile(
        Titanium.Filesystem.resourcesDirectory,
        this.path
    );
    if (!this.file.exists()) {
        throw 'EarpError - Failed to parse "' + this.path + '" : File does not exist';
    }

    var data = this.file.read().toString();

    console.log(css.parse(data));
};


module.exports = Layout;