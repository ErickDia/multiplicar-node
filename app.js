const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');
const {argv} = require('./config/yargs');
var colors = require('colors');
console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base,argv.limite)
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base,argv.limite)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
        break;
    default:
        console.log('comando no reconocido');
        break;
}


