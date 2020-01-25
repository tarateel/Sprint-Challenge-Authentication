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