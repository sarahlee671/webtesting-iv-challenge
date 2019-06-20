const supertest = require('supertest');
const server = require('./server.js');

describe('server', () => {
    describe('GET /', () => {
        it('responds with 200 OK', async () => {
            await supertest(server)
                .get('/')
                .expect('Content-Type', /json/i);
        })
        it('responds{api:"api is working"}', async () => {
            await supertest(server)
                .get('/')
                .then(res => {
                    expect(res.body).toEqual({api: 'api is working'})
                })
        })
    })
})