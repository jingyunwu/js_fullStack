// 引入资源文件
var createError = require('http-errors');
var express = require('express');
var path = require('path');  // node中自带
var cookieParser = require('cookie-parser');
var looger = require('morgan');


// 引入index.js 路由配置文件
var indexRouter = require('./routes/index')

// 引入user.js 路由配置文件
var userRouter = require('./routes/user.js')
