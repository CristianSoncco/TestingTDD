import chai from 'chai';
import {expect} from 'chai';
import {app} from '../app';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
chai.should();

describe('Get 404 ',()=>{
        it('Debe recibirse un 404',()=>{
            return chai.request(app)
            .get('/bu')
            .then((res)=>{
                res.should.have.status(404);
            }, (err)=>{
                Promise.reject();
            })
        });
});

describe('Http index',()=>{
    describe('GET /',()=>{
        it('Debe recibirse un 200',(done)=>{
            chai.request(app)
            .get('/')
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            })
        });
    });
});