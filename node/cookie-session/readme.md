## 有什么用
http  是无状态的
客户端  服务器  再次请求的时候  知道客户端是谁
## -S 是什么意思
指 --save
放在 "dependencies": {} 这个对象
npm i.
在 json 文件里面寻找各个依赖并安装.
在本地开发  安装的 node_modules
服务器上面 只需要写的代码   不需要  上传 node_modules
## cookie  
存在客户端：
js  操作：
document.cookie 
后端：响应头
Set-Cookie: name1=value1; path=/;  httponly

浏览器检查所有存储的 cookie , 把符合当前作用范围的cookie 放在 http 请求头 发给服务器.
cookie  有可能被用户禁用

内容：
name:
value:
path: 规定 cookie 生效的路径
/        所有的路径
/user    /user 以及  /user/xxx
/user/xxx  /user/xxx  以及下面的 /user/xxx/xxx
httpOnly: true / false  HTTP   为true就不能通过 js 获取 cookie (document.cookie)

max-age: 在几秒 过后过期

作用范围：
path 
domain
cookie用途: 会话的状态管理，保存用户的个性化设置。

## session
保存在服务端的。
靠后台语言实现的，
有很多个 session
很多个用户  sessionID

## koa 第三方中间件
ctx  req + res 
ctx: {
  req,
  res,
}
koa-views ejs
往 ctx 上面扩展 80%
ctx: {
  req,
  res,
  render: () => {
  }
}
调用 提供的 render()

## localSorage  sessionStorage  cookie  session  浏览器中的存储