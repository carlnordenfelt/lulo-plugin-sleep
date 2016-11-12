'use strict';

var pub = {};

pub.validate = function (event) {
    if (!event.ResourceProperties.Seconds) {
        throw new Error('Missing required property Seconds');
    }
};

pub.create = function (event, _context, callback) {
    setTimeout(function () {
        callback();
    }, event.ResourceProperties.Seconds * 1000);
};

pub.delete = function (_event, _context, callback) {
    return setImmediate(callback);
};

pub.update = function (event, context, callback) {
    return pub.create(event, context, callback);
};

module.exports = pub;
