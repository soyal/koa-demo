import Koa = require('koa')
import auth = require('koa-basic-auth')

const app = new Koa()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    if (e.status === 401) {
      ctx.status = 401
      ctx.set('WWW-Authenticate', 'Basic')
      ctx.body = 'Unauthorized'
    } else {
      throw e
    }
  }
})

/**
 * auth方法会截取ctx.headers.authorization与传入的name, pass作对比
 * 请参考http basic auth
 * 首次发起请求，不含name, pass，server 返回401，浏览器弹出用户名密码输入框
 * 输入后，再次发送请求，跟上一步一致
 */
// set user key
app.use(auth({ name: 'soyal', pass: '123' }))

// response secret
app.use(async (ctx, next) => {
  await next()
  ctx.body = 'secret content'
})


if(!module.parent) {
  app.listen(3000)
}

export default app
