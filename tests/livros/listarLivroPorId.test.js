import * as chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/app.js';


chai.use(chaiHttp);
const should = chai.should();

describe('Livros', () => {
    describe('/GET livros/:id', () => {
        it('deve listar um livro por ID', (done) => {
            const id = '66ec2c4c45ac6daea1d0778e'; 
            chai.request(server)
                .get(`/livros/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id').eql(id);
                    done();
                });
        });
    });
});
