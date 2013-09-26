var settings = {
    widgets: [],
    generators: []
};

settings.extend = function (options) {
    Object.keys(options).forEach(function (key) {
        if (typeof options[key] === 'object' && typeof settings[key] === 'object') {
            Object.keys(options[key]).forEach(function (subkey) {
                if (options[key].hasOwnProperty(subkey)) {
                    settings[key][subkey] = options[key][subkey];
                }
            });
        } else {
            settings[key] = options[key];
        }
    });
};

module.exports = settings;