var path = require('path');
var _root = path.resolve(__dirname, '..');

exports.root = function (args) {
    args = Array.prototype.slice.call(arguments, 0);
    return [_root].concat(args).join('\\');
};

