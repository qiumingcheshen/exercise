const express = require('express');
const path = require('path');
const router = require('./router.js');
const bodyParser = require('body-parser');
const app = express();



// 设置允许跨域访问该服务
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Headers', 'mytoken');
//     next();
// });
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

// 启动静态资源服务
app.use(express.static('public'));

// 处理请求参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 配置路由
app.use(router);
// 监听端口
app.listen(3000, () => {
    console.log('running...');
});