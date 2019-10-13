const argv = require ("./config/yargs").argv;
const {createFile,listTable}  = require("./multiplicar/multiplicar");
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case "listar":
        listTable(argv.base,argv.limite).then( ()  => {
        })
        .catch( error => {
            console.log(error);
        })  
        break;
    case "crear":
        createFile(argv.base,argv.limite).then( file  => {
            console.log(`la tabla de ${argv.base} * ${argv.limite} fue creado en el archivo `, colors.green(file));
        })
        .catch( error => {
            console.log(error);
        })            
            break;
    default:
        console.log("Comando  no reconocido");
        break;
}