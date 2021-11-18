const argv = require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption:true,
                describe:'Toma la base de la tabla de multiplicar'
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                default:false, // pone la variable por defecto en false si no se ingresa nada 
                describe:'Permite listar lo que se ingreso de la tabla generada'
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                default:10, // pone la variable por defecto en false si no se ingresa nada 
                describe:'Permite colocar hasta que numero se quiere multiplicar '
            })
            .check( (argv,options) =>{ // sirve para revisar el valor entregado en consola
                if(isNaN(argv.b)){ // pregunta si el valor da como resultado que NO  es un numero
                    throw 'la base tiene que ser un numero';
                }
                return true; // se debe colocar siempre un return true para que cuando NO haya error siga la aplicacion 
            })
            
            .argv;

            module.exports = argv;