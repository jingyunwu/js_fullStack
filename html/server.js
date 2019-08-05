const Koa = require('koa');
const app = new Koa()
const koaStatic = require('koa-static');
const path = require('path');

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  await next();
})
app.use(koaStatic(
  path.join(__dirname , './static')
))

app.listen(9999, () => {
  console.log('server is running 9999');
});
