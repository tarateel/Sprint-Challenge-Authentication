const supertest = require('supertest')
const server = require('./server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  // this function executes and clears out the table before each test
  await db('users').truncate();
});

test('welcome route', async () => {
  const res = await supertest(server).get('/')
    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toMatch(/Sprint Challenge Authentication/i)
});

test('add a user to the database', async () => {
  const res = await supertest(server)
    .post('/api/auth/register')
    .send({
      "username": "test",
      "password": "test"
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe('application/json')
  expect(res.body.username).toBeString()
});

test('login as a test user and return a token', async () => {
  const res = await supertest(server)
    .post('/api/auth/login')
    .send({
      "username": "test",
      "password": "test"
    })
  expect(res.status).toBe(200)
  expect(res.type).toBe('application/json')
  expect(res.body.token).toBeTruthy()
});

test('GET jokes from the api', () => {
  const res = supertest(server)
    .get('/api/jokes')
    .set(
      "Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InVzZXIyIiwiaWF0IjoxNTc5OTgxMzM3LCJleHAiOjE1ODA4NDUzMzd9.zj9VA2aVKMcOu3TS5x3wRKXWh1-vZ8LFhPNCHfUrATc","message"
    )
    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect([res.body]).toBeArray()
})