const http = require('http');
// 解析请求
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    // 解析文件
    const form = new formidable.IncomingForm();
    form.uploadDir = './static/';
    form.parse(req, (err, fields, files) => {
      console.log(fields, files);
      // <input type="file" name="upload"></input>
      const oldPath = files.upload.path;
      const fileName = files.upload.name;
      // 'static\\upload_d992a5a6d25e98f31d8d058af1eec96c',
      const dirname = path.dirname(oldPath);
      // dirname = static/
      const newPath = path.join(dirname, fileName);
      fs.rename(oldPath, newPath, (err) => {

      });
      res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
      });
      res.end('文件上传完毕');
    })
    return false;

  }
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  });
  res.end(
  `<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="upload">
  <input type="text" name="nickname">
  <input type="submit" value="submit">
 </form>`
   
  
  )
})
.listen(8080, () => {
  console.log('server is running port 8080');
})