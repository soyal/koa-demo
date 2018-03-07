import supertest = require('supertest')
import server from './index'

const request = supertest.agent(server)

test('base auth', () => {
  
})