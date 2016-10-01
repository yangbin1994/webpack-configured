var express = require('express');
var app = express();

app.use(express.static('./dist'));


// 启动
var server = app.listen(3008, function () {
	console.log('app server launch at', 3008);
});