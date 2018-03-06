import Koa = require('koa')

const app = new Koa()

app.use(async ctx => {
  const request = ctx.request
  ctx.body = 'body parsing'
})

app.listen(3000)