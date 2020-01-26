const supertest = require('supertest')
const server = require('./server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  // this function executes and clears out the table before each test
  await db('users').truncate();
});

describe('add a user, login, get jokes', () => {
  it('adds a user to the database', async () => {
    const res = await supertest(server)
      .post('/api/auth/register')
      .send({
        "username": "testuser",
        "password": "test"
      })
    expect(res.status).toBe(201)
    expect(res.type).toBe('application/json')
    expect(res.body.username).toBeString()
  });

  it('should log in and return a token', async () => {
    const res = await supertest(server)
      .post('/api/auth/login')
      .send({
        username: "testuser",
        password: "test"
      })
    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(response.body.username).toBeString();
  });

  it('should get jokes from the api', () => {
    const res = supertest(server)
      .get('/api/jokes')
      // .set(
      //   "Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InVzZXIyIiwiaWF0IjoxNTc5OTgxMzM3LCJleHAiOjE1ODA4NDUzMzd9.zj9VA2aVKMcOu3TS5x3wRKXWh1-vZ8LFhPNCHfUrATc"
      // )
    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect([res.body]).toBeArray()
  });
});


// test('add a user to the database', async () => {
//   const res = await supertest(server)
//     .post('/api/auth/register')
//     .send({
//       "username": "testuser",
//       "password": "test"
//     })
//   expect(res.status).toBe(201)
//   expect(res.type).toBe('application/json')
//   expect(res.body.username).toBeString()
// });

// test('login as a test user and return a token', async () => {
//   const res = await supertest(server)
//     .post('/api/auth/login')
//     .send({
//       username: "testuser",
//       password: "test"
//     })
//   expect(res.status).toBe(200)
//   expect(res.type).toBe('application/json')
//   expect(response.body.token).toBeTruthy();
// });

// test('GET jokes from the api', () => {
//   const res = supertest(server)
//     .get('/api/jokes')
//     .set(
//       Authorization, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InVzZXIyIiwiaWF0IjoxNTc5OTgxMzM3LCJleHAiOjE1ODA4NDUzMzd9.zj9VA2aVKMcOu3TS5x3wRKXWh1-vZ8LFhPNCHfUrATc
//     )
//     expect(res.status).toBe(200)
//     expect(res.type).toBe('application/json')
//     expect([res.body]).toBeArray()
// })