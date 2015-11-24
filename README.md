# javascript log

## AMD 引用方式

```

require(['js-log'], function (jsLog) {
    jsLog.config({
        url: '/v1/sysmgr/log/c0002.json'
    });

    jsLog.debug('test');
});

```

## CMD 引用方式

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
        url: '/v1/sysmgr/log/c0002.json'
    });

    jsLog.debug('test');
</script>
</body>
</html>
```

## config 参数

名称|类型|默认值|说明
---|---|---|---
level|string|debug|日志等级:debug、info、warn、error
sendLevel|string|debug|日志服务接口发送等级:debug、info、warn、error
url|string||日志服务接口路径
emulateJSON|boolean|false|true:用 'application/json'发送，false:用'application/x-www-form-urlencoded'发送