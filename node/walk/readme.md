- readdir
    读目录里的内容  IO操作异步
    readdirSync  Async即异步    sync即同步

    js是单线程的，用回调 或 Promise，释放主线程的控制权，主要因为Js是前端DOM的编程，用户交互比较多，
    等到执行完后，再通过event-loop机制，来拿会控制权(callback resolve)
    来到了node，js 获取了服务器端的能力，
    readdirSync()