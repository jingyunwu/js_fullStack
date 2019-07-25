var express = require('express')
var fs = require('fs')  // node中自带
var router = express.Router()  //express自带的Router

// 首页的操作
router.get('/', function(req, res, next) {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  function readImage(path, res) {
    fs.readFile(path, 'binary', function(err, file) {
      if(err) {
        return
      } else {
        res.writeHead(200, { 'Content-Type': 'image/jpeg'})
        res.write(file, 'binary')
        res.end()
      }
    })
  }
  readImage('/public/images/head.jpeg', res)
})
module.exports = router


