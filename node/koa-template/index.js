const Koa = require('koa');

// 应用的实例
const app = new Koa();
// 很多个
const admin = new Koa();
// req  res   ctx 封装了  req res
app.use(async (ctx, next) => {
  console.log(1);
  // no    koa 没有回应  自己处理了  not found
  // 交给下一个中间件
  await next();
  console.log(2);
})
app.use(async (ctx, next) => {
  console.log(4);
  await next();
  console.log(5);
})
app.use(async (ctx) => {
  console.log(3);
  ctx.body = `hello koa`;
})
app.listen(3000, () => {
  console.log('server is running 3000');
})
admin.listen(4000, () => {
  // console.log('admin server is running 4000');
})
