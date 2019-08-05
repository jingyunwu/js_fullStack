- https
  http: 不安全  即超文本传输协议
    req(用户 proxy  浏览器) 传输的过程      
    res(从服务器端返回)

1. 怕我们的内容被别人读过
2. 怕内容被篡改
3. 过期了不可以被伪造使用

- GET  FROM  password url 完整的日志 : D:/login?username=admian&password=123 不安全
- 上网服务供应商，等中间人，HTTP传输是不安全的

- POST     D:/login  安全

- HTTPS
  小美
     我喜欢你。。。
  小王
  小谷

加密 SSL
对称加密
  加密，+解密的密码
非对称加密  开销比较大, 耗电 耗内存
  公钥
  私钥

先非对称加密  这之后都是对称加密

签证书   第三方 证明你是你

- 去重
