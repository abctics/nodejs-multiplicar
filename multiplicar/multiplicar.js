//Requires
const fs = require('fs');
const colors = require('colors');

/*
const fs = require('express');
const fs = require('./js');
*/

 const createFile = (base,limit) => {
     return new Promise ( (resolve,reject) => {

        if (!Number(base)) {
            reject(`${base} No es un número`);
            return;
        }
        let data = "";
        for (let index = 0; index <= limit; index++) {
           data +=  ` ${base} * ${index} = ${base*index} \n`;
        }
        
        fs.writeFile( `tables/table-${base} al ${limit}.txt`, data, (err) => {
          if (err) reject(err);
          resolve(`table-${base}`)
        });
     })
 }

 const listTable = (base,limit) =>{
    return new Promise ( (resolve,reject) => {

        if (!Number(base)) {
            reject(`${base} No es un número`);
            return;
        }
        let data = "";

        console.log('============================'.green);
        console.log(`Table del ${base}`.green);
        console.log('============================'.green);
        for (let i = 0; i <= limit; i++) {
           console.log(` ${base} * ${i} = ${base*i} \n`) ;
        }
     })  
 }


module.exports = {
    createFile,
    listTable
}