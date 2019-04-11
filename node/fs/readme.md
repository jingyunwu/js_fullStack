node 让js 来到了后端

服务器，Linux
文件系统操作   fs
连接数据库  db

没有DOM 

文件读取 要花时间 定位文件(第一个参数), 打开文件，将文件内容读到内存中输出到命令行
文件越大  花的时间越多 js里的异步   js是一门单线程语言
异步怎么解决:
1. callback 回调函数
fs.readFile(path, 'utf-8', function(err,data) {

})

2. promise 
    分开，Promise 是类 用于处理耗时异步问题的类，为了防止回调地狱，看到耗时问题就用出一个Promise实例
    resolve 将控制权交给then 将结果resolve(data)
    reject 失败 catch(e) {}
