## 跨域
浏览器的安全策略
同源策略：
同协议 域名 端口 同源

有不相同 就是不同源 存在跨域


## CORS
规定了一组 http 的头部字段作用是:
  允许哪些网站通过浏览器有访问的权限

1. access-X
2. cookie
3. 浏览器会先 以 OPTIONS 的请求方法 发起一个预检请求 (preflight) 请求, 获取一下允不允许当前的域请求，
服务器允许之后才会发起正式的请求


## 代理
  1. nginx
  
  反向代理：   live-server --proxy=/api:http://loaclhost:9999/api/
  http://localhost:9999/api/
  http://localhost:8888/api/
  不知道请求的是哪个服务器
  
  正向代理：
  google
  比如搭一个服务器
  A -> proxy -> google.com
  B -> proxy -> google.com
  只知道proxy(代理), 不知道是谁

## iframe + postMessage  
  1. 前端页面通过 iframe 引入一个后端目录下的 html,
    iframe  是不受同源策略限制的，
  2. postMessage 用于在两个窗口之间传递数据
  3. 前端页面 通过 postMessage 向后端目录下的 html 传递接口需要的请求参数
  4. 后端页面 通过 postMessage 向前端页面 传递 接口结果

## iframe + window.name  
  iframe 共享 window.name


## jsonp
仅次于cors