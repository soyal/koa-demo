import Koa = require('koa')

const app = new Koa()

export const middleware = async (ctx: Koa.Context) => {
  ctx.status = 404

  switch (ctx.accepts(['html', 'json'])) {
    case 'html':
      ctx.type = 'html'
      ctx.body = '<p>Page Not Found</p>'
      break
    case 'json':
      ctx.type = 'json'
      ctx.body = {
        message: 'Page Not Found'
      }
      break
    default:
      ctx.type = 'text'
      ctx.body = 'Page Not Found'
  }
}

app.use(middleware)

app.listen(3000)

export default app
