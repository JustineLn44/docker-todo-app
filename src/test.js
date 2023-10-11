const request = require('supertest')
const app = require('./app')

describe('GET /', () => {
    it('should respond with Hello, Docker :', (done) => {
        request(app).get('/').expect('Hello, Docker !', done);
    });
});