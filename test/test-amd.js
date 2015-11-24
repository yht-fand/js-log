require(['js-log'], function (jsLog) {

});

var jsLog = root.$ = require('js-log');

jsLog.config({
    url: '/v1/sysmgr/log/c0002.json'
});

jsLog.debug('test');