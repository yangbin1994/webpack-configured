var express = require('express');
var helpers = require('./build/helpers');
var configs = require('./build/configs');
var fs = require('fs');
var path = require('path');
var app = express();

app.use(express.static('./'));

// 加载api
fs.readdirSync(helpers.root('apis')).forEach(function (fileName) {
	var match = fileName.replace('.js', '').split('_')
	var method = match[0]
	var apiName = match[1]
	var rspFunc = require(helpers.root('apis', fileName))
	app[method]('/' + apiName, rspFunc)
});


// 启动
var server = app.listen(configs.server.port, function () {
	console.log('app server launch at', configs.server.rootPath());
});