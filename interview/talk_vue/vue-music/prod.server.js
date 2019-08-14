var express = require('express')
// var config = require('./config/index')
var app = express()
app.use(express.static('./dist'))

var port = 4000

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})