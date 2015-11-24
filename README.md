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
