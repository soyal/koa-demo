import Koa = require('koa')
import app, { middleware } from './index'
import http = require('http')

test('404', async () => {
  const ctx = new Koa.Context()

  middleware(ctx)
})
