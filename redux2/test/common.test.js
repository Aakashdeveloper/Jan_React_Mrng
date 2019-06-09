let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing my get Api', () => {
    it('should be return status 200', function(done){
        chai
            .request('http://localhost:8900')
            .get('/articles')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });
    it('should be return status 201', function(done){
        chai
            .request('http://localhost:8900')
            .get('/article')
            .then(function(res){
                expect(res).to.have.status(404);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });
    it('should be return status 200', function(done){
        chai
            .request('http://localhost:8900')
            .post('/articles')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });
    it('should be return status 200', function(done){
        chai
            .request('http://localhost:8900')
            .patch('/articles/1')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });
    it('should be return status 200', function(done){
        chai
            .request('http://localhost:8900')
            .delete('/articles/1')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });
});