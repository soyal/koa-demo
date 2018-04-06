/**
 * 利用koa-compose来组合多个middleware
 */
import compose = require('koa-compose')
import Koa = require('koa')

const app = new Koa()

const m1 = (ctx, next) => {
  console.log(1)
  next()
}

const m2 = (ctx, next) => {
  console.log(2)
  /**
   * url === path === originUrl
   * protocol协议, hostname域名或者ip, port端口, path路径
   * host = hostname + port
   * origin = protocol + hostname + port
   * href = origin + path
   */
  if(ctx.url === '/') {
    ctx.body = 'Hello World'
  }
  next()
}

app.use(compose([m1, m2]))

if(!module.parent) {
  app.listen(3000)
}

export default app
