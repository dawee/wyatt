exports.feed = function (ui, identityMap) {

    ui.getViewByID = function (id) {
        var child = null;
        if (identityMap.hasOwnProperty(id)) {
            child = identityMap[id];
        }
        return child;
    };

    return ui;
};
