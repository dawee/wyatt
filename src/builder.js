/*global Titanium,Handlebars,Earp*/
"use strict";

Earp.Builder = function (path, context) {
    this.init(path, context);
};

Earp.Builder.prototype = {

    init: function (path, context) {
        this.context = context || {};
        this.file = Titanium.Filesystem.getFile(path + '.earp');
    },

    run: function () {
        var content = this.file.read(),
            stream = content.toString(),
            template = Handlebars.compile(stream),
            exported = template(this.context),
            dom = Titanium.XML.parseString(exported),
            generator = Earp.getGenerator(dom.documentElement);
        return generator.proceed();
    }

};

Earp.build = function (path, context) {
    var builder = new Earp.Builder(path, context);
    return builder.run();
};