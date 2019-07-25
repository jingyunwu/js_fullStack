var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var data = {
  code: 200,
  msg: 'successs'
}

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'trip'
})

// 开始请求