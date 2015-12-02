/*!
 * js-log 0.0.1
 * http://js-log.cardone.top/
 *
 *
 * Copyright 2015, 2099 cardone
 * Released under the MIT license
 * http://js-log.cardone.top/license
 *
 * Date: 2015-11-23T23:01Z
 */
(function (factory) {
    var root = (typeof self == 'object' && self.self == self && self) || (typeof global == 'object' && global.global == global && global);

    if (typeof define === 'function' && define.amd) {
        define(['exports', 'jquery', 'json2'], function (exports) {
            root.jsLog = factory(root, exports, (root.jQuery || root.$));
        });
    } else if (typeof exports !== 'undefined') {
        if (!(root.jQuery || root.$)) {
            try {
                root.$ = require('jquery');
            } catch (e) {
            }
        }

        if (!root.JSON) {
            try {
                root.JSON = require('json2');
            } catch (e) {
            }
        }

        root.jsLog = factory(root, exports, (root.jQuery || root.$));
    } else {
        root.jsLog = factory(root, {}, (root.jQuery || root.$));
    }
}(function (root, jsLog, $) {
    var previousJsLog = root.jsLog;

    jsLog.noConflict = function () {
        root.jsLog = previousJsLog;

        return this;
    };

    jsLog.options = {
        level: "debug",
        sendLevel: "debug",
        url: "",
        emulateJSON: false,
        data: {
            token: 'test'
        }
    };

    jsLog.config = function (options) {
        $.extend(jsLog.options, options);
    };

    var logLevel = {
        "debug": 0,
        "info": 1,
        "warn": 2,
        "error": 4
    };

    var sendLog = function (data) {
        var params = $.extend({
            type: "POST",
            dataType: 'json'
        }, ($.isFunction(jsLog.options.data) ? jsLog.options.data() : jsLog.options.data));

        if (jsLog.options.emulateJSON) {
            params.contentType = 'application/json';
            params.data = root.JSON.stringify(data);
        } else {
            params.contentType = 'application/x-www-form-urlencoded';
            params.data = data;
        }

        $.ajax($.extend(params, jsLog.options));

        return true;
    };

    $.each(logLevel, function (k, v) {
        var isName = 'is' + k.substr(0, 1).toUpperCase() + k.substr(1, k.length) + 'Enabled';

        jsLog[isName] = function () {
            return v >= logLevel[jsLog.options.level];
        };

        jsLog[k] = function (message, ex) {
            if (logLevel[jsLog.options.level] > v) {
                return false;
            }

            if (root.console) {
                root.console.log(message);
            }

            if (!jsLog.options.url) {
                return false;
            }

            if (logLevel[jsLog.options.sendLevel] > v) {
                return false;
            }

            var data = {
                level: k,
                message: message
            };

            if (message) {
                data.message = message;
            }

            if (ex) {
                data.ex = ex;
            }

            return sendLog(message, ex);
        };
    });

    return jsLog;
}));