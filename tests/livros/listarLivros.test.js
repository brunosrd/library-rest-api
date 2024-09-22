import * as chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/app.js'; 

chai.use(chaiHttp);
const should = chai.should();

describe('Livros', () => {
    describe('/GET livros', () => {
        it('deve listar todos os livros', (done) => {
            chai.request(server)
                .get('/livros')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});
