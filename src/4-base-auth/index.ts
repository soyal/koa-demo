import Koa = require('koa')
import auth = require('koa-basic-auth')

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(1)
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

// set user key
app.use(auth({ name: 'soyal', pass: '123' }))

// response secret
app.use(async (ctx, next) => {
  await next()
  ctx.body = 'secret'
})

const server = app.listen(3000)

export default server
