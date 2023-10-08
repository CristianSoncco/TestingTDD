import chai from 'chai';

import { getYear,getHola } from "../controllers/helpers";
import {expect} from 'chai';
import IndexController from '../controllers/indexController';

 describe('Helpers',()=>{
    //testeamos el método getYear
    describe('Test getYear function',()=>{
        let myYear;
        let year;
        before(()=>{
            console.log('Cargando valores.');
            myYear = new Date().getFullYear();
            year = getYear();
        });
        after(()=>{
            console.log('Ejecutanto after.');
        })
        it('Devuelve un número',()=>{
            expect(year).to.be.a('number');
        })

        it('Devuelve el año en curso',()=>{
            expect(year).equal(myYear);
        })        
        it('Otras comparaciones',()=>{
            expect(year).to.be.most(myYear+1);
            expect(year).to.be.least(myYear-1);
            expect(year).to.be.within(1970,2100);
            expect(year).not.to.be.NaN;
        })   
    });
        

    describe('Test getHola function',()=>{
        const saludo = getHola();
        it('Devuelve un string',()=>{
            expect(saludo).to.be.a('string');
        })

        it('Devuelve un hola.',()=>{
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


        it('Comparando errores',()=>{
            const generarError=()=>{
                throw new TypeError('Error en BD');
            }
            expect(generarError).to.throw();//hubo throw    
            expect(generarError).to.throw(TypeError);//tipo de objeto
            expect(generarError).to.throw('BD');//contenga   
            
            const error= TypeError('Error BD');
            error.code=500;
            const generarError2=()=>{
                throw error;
            }
            expect(generarError2).to.throw(error);
            expect(generarError2).to.throw(TypeError).with.property('code',500);


        })
    });  
 });