"use strict";
exports.__esModule = true;
exports["default"] = (function (authorization) {
    var base64Credentials = authorization.split(' ')[1];
    var credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    var _a = credentials.split(':'), username = _a[0], password = _a[1];
    if (username === process.env.USERNAME && password === process.env.PASSWORD) {
        return true;
    }
    return false;
});
