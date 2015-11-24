require(['js-log'], function (jsLog) {
    jsLog.config({
        url: '/v1/sysmgr/log/c0002.json'
    });

    jsLog.debug('test');
});

