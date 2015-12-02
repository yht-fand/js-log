# 前端日志组件，可用于记录用户行为

> 日志信息发送到日志服务接口

> 可配置日志服务接口地址

> 可配置本地浏览器日志打印等级

> 可配置发送日志服务接口等级

## AMD引用方式

```
require(['js-log'], function (jsLog) {
    jsLog.config({
        level: 'debug',
        url: '/v1/sysmgr/log/c0002.json'
    });

    jsLog.debug('test');

    if (jsLog.isDebugEnabled()) {
        alert('isDebugEnabled === true');
    }
});
```

## CMD引用方式

```
var jsLog = require('js-log');

jsLog.config({
    level: 'debug',
    url: '/v1/sysmgr/log/c0002.json'
});

jsLog.debug('test');

if (jsLog.isDebugEnabled()) {
    alert('isDebugEnabled === true');
}
```

## 普通引用方式

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test</title>
</head>
<body>
<script src="../bower_components/jquery/dist/jquery.min.js"></script>
<script src="../dist/js/js-log.min.js"></script>
<script>
    jsLog.config({
        level: 'debug',
        url: '/v1/sysmgr/log/c0002.json'
    });

    jsLog.debug('test');

    if (jsLog.isDebugEnabled()) {
        alert('isDebugEnabled === true');
    }
</script>
</body>
</html>
```

## 方法
名称|参数|说明
---|---|---
noConflict|无|避免冲突的方法
debug|message:日志消息,ex:异常对象，可为空值|发送debug日志
info|message:日志消息,ex:异常对象，可为空值|发送info日志
warn|message:日志消息,ex:异常对象，可为空值|发送warn日志
error|message:日志消息,ex:异常对象，可为空值|发送error日志
isDebugEnabled|无|是否启用 debug
isInfoEnabled|无|是否启用 info
isWarnEnabled|无|是否启用 warn
isErrorEnabled|无|是否启用 error

## config 参数

名称|类型|默认值|说明
---|---|---|---
level|string|debug|日志等级:debug、info、warn、error
sendLevel|string|debug|日志服务接口发送等级:debug、info、warn、error
url|string||日志服务接口路径
emulateJSON|boolean|false|true:用 'application/json'发送，false:用'application/x-www-form-urlencoded'发送
data|object|{token:'test'}|日志服务接口令牌