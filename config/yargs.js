const options = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require("yargs")
.command('crear','Genera un archivo con la tabla multiplicar',options)
.command('listar','listar tabla multiplicar',options)
.help()
.argv;

module.exports = {
    argv
}