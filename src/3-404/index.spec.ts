import Koa = require('koa')
import server from './index'
import supertest = require('supertest')
const request = supertest.agent(server)

afterEach(() => {
  server.close()
})

describe('404', async () => {
  const response = await request.get('/').set('Accept', 'application/json')
  expect(response.status).toBe(404)
  expect(response.body.message).toBe('Page Not Found')
})
