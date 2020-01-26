import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/app';

chai.use(chaiHttp);

describe('index.js', () => {
  it('should start the server', function(done) {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).to.eq(200);
        done(err);
      });
  });
});

