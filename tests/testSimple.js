import chai from 'chai';

import { getYear } from "../controllers/helpers";
import {expect} from 'chai';

 describe('Helpers',()=>{
    //testeamos el método getYear
    describe('Test getYear function',()=>{
        it('Devuelve un número',()=>{
            const year = getYear();
            expect(year).to.be.a('number');
        })

        it('Devuelve el año en curso',()=>{
            const myYear = new Date().getFullYear();
            const year = getYear();
            expect(year).equal(myYear);
        })        
    });
 });