## script
1. 下载  2. 执行
1. async
  1. html parse / 下载 并行
  2. 下载完就执行  顺序无法控制
2. defer
  1. html parse / 下载 并行
  2. 整个文档加载完成之后  按照 script 在文档中出现的顺序执行
3. 没有属性
  1. html parse 和 js 下载 执行 都是互斥的

## crossorigin
用于 可以引用跨域资源的标签：img  link script
crossorigin 代表要协商跨域
后端没设置  Access-control-*  就会出错
1. anonymous
    如果使用了这个值，会在请求头中加一个 origin 属性, 
2. use-credentials
    请求的时候带上 cookie 等 用户验证的信息

如果未设置 cross, 跨域 js 发生了错误，将会向 widow.onerror 提供很少的信息，通过 crossorigin 属性 得到详细的信息    