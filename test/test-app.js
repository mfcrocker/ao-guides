let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

let app = require('../app');

chai.use(chaiHttp);

describe('GET /', () => {
    it('it should return Hello World!', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(200);
                res.text.should.equal("Hello World!");
                done();
            });
    });
});