var jsLog = require('js-log');

jsLog.config({
    level: 'debug',
    url: '/v1/sysmgr/log/c0002.json'
});

jsLog.debug('test');

if (jsLog.isDebugEnabled()) {
    alert('isDebugEnabled === true');
}