import supertest = require('supertest')
import app from './index'
const server = app.listen()

const request = supertest.agent(server)

afterAll(() => {
  server.close()
})

test('with no credential',async () => {
  const res = await request.get('/')
  expect(res.status).toBe(401)
  expect(res.text).toBe('Unauthorized')
})

test('with invalid credential', async () => {
  const res = await request.get('/').auth('wrong', 'pass')
  expect(res.status).toBe(401)
  expect(res.text).toBe('Unauthorized')
})

test('with valid credential', async () => {
  const res = await request.get('/').auth('soyal', '123')
  expect(res.status).toBe(200)
  expect(res.text).toBe('secret content')
})