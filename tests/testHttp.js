import chai from 'chai';
import {expect} from 'chai';
import chaiHttp from 'chai-http';
// import {app} from '../app';
const app = require('C:/Users/Usuario/codes/js/archivos_base_javascript_tdd/archivos iniciales/app.js');

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