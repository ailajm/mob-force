const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('GET /api/players', () => {
  it('responds with json containing a list of all players', async () => {
    const response = await request.get('/api/players')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(Array.isArray(response.body)).toBeTruthy();
  });
});
