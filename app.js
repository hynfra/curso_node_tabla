
// const fs = require('fs'); // se usa el paquete integrado en node llamado file system
const { crearArchivo } = require('./helpers/multiplicar.js');// se recibe lo del archivo multiplicar y se usa desestructuracion para sacar el metodo crearArchivo
const argv = require('./config/yargs.js');
const colors = require('colors');
// el paquete file system permit crear archivos de texto

console.clear();

console.log(argv);
// process.argv recibe el argumento desde la terminal 
// const [, , arg3 = 'base=5'] = process.argv;// desestructuracion de arreglos
// const [,base = 5 ] = arg3.split('=');

// const base = 7;

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`.rainbow) )
    .catch(err => console.log(err));

