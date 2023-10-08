import chai from 'chai';

import { getYear,getHola } from "../controllers/helpers";
import {expect} from 'chai';
import IndexController from '../controllers/indexController';

 describe('Helpers',()=>{
    //testeamos el método getYear
    describe.skip('Test getYear function',()=>{
        it('Devuelve un número',()=>{
            const year = getYear();
            expect(year).to.be.a('number');
        })

        it('Devuelve el año en curso',()=>{
            const myYear = new Date().getFullYear();
            const year = getYear();
            expect(year).equal(myYear);
        })        
        it('Otras comparaciones',()=>{
            const myYear = new Date().getFullYear();
            const year = getYear();
            expect(year).to.be.most(myYear+1);
            expect(year).to.be.least(myYear-1);
            expect(year).to.be.within(1970,2100);
            expect(year).to.be.NaN;
        })   
    });
        

    describe('Test getHola function',()=>{
        it('Devuelve un string',()=>{
            const saludo = getHola();
            expect(saludo).to.be.a('string');
        })

        it('Devuelve un hola.',()=>{
            const saludo = getHola();
            expect(saludo).to.have.string('Hola');
            expect(saludo).to.not.have.string('Adios');
        }) 
    });  
    
    describe('Test tipos de datos',()=>{
        it('Comparando tipos',()=>{
            const obj = {};
            expect(obj).to.be.a('Object');
            expect(obj).not.to.be.a('Array');
            let _null;
            expect(_null).to.be.undefined;
            _null=null;
            expect(_null).to.be.null;
        })

        it('Comparando objetos',()=>{
            const obj1 = {name:'Cristian',last:'Soncco'} ;
            const obj2 = {name:'Cristian',last:'Soncco'} ;
            expect(obj1).to.have.property('name');
            expect(obj1).to.deep.equal(obj2);
            expect(obj1).to.have.any.keys(['name']);
            expect(obj1).to.have.all.keys(['name','last']);
            
            expect(obj1).to.be.instanceOf(Object);

            const instancia = new IndexController;
            expect(instancia).to.be.instanceOf(IndexController);


        })



    });  
 });