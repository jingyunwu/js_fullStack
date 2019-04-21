- MVVM  前端新贵
 Model 数据  Page({data: {
     legends:[]
 }})
 View  视图
 WXML
 VM  {{}}  wx:for ...

- MVC  经典的Web开发模式
  Model  => SQL
  View   => 静态页面
  Controller  => 路由，

- WebServer  软件程序
 Web服务器硬件运行WebServer程序的
 ip http协议  
 http://127.0.0.1:3000  3000端口号
 端口 不只一个服务
 3306  MYSQL 、
 80 Web服务
 http
    .createServer(function(request, response) {
        response.end('Hello World!');
    })
    .listen(3000);

 request 用户  N   Web 一直在 3000端口上伺服
 request 就能找到这家店, 每位用户到达，触发 事件，调用
 createServer 回调函数，request 用户身份，response ?
 响应请求  http 响应后就断开 


