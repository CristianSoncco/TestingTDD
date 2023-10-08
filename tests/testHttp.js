import chai from 'chai';
import {expect} from 'chai';
import chaiHttp from 'chai-http';
// import {app} from '../app';
const app = require('C:/Users/Usuario/codes/js/archivos_base_javascript_tdd/archivos iniciales/app.js');
import { getData } from '../controllers/indexController';

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

describe('Http index',()=>{
    describe('Control de los datos del array',()=>{
   
        beforeEach((done)=>{
            chai.request(app)
            .post('/new')
            .send({subject:'Registro test',description:'Esta es la descripción'})
            .end((err,res)=>{
            done();
            })
        });

        it('Obtiene array de To Do.',(done)=>{
            getData().then((data)=>{
                expect(data).not.to.be.empty;
                // expect(data).have.lengthOf(2);
                done();
            })
        })
    
    });
});