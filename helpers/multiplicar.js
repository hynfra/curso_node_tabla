
const fs = require('fs'); // se usa el paquete integrado en node llamado file system
const colors = require('colors');

// const crearArchivo = ( base = 5) => {
   
//     return new Promise((resolve, reject) => {
//         console.log('============'); 

//         console.log(`Tabla del: ${base}`);
    
//         console.log('============'); 
    
//         let salida = '';
//         for(let i = 1 ; i <= 10; i++){
    
//             salida += `${base} x ${ i } = ${ base * i }\n`; 
//         }
    
//         console.log(salida);
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         (fs)
//         ?resolve(fs)
//         :reject(`hubo un problema para crear el archivo`);
//     })

// }

const crearArchivo = async ( base = 5, listar = false, hasta = 10) => { // el que el metodo sea async, permite usar promises de igual forma 
   
    
try{
    let salida = '';
    for(let i = 1 ; i <= hasta; i++){

        salida += `${base} x ${ i } = ${ base * i }\n`; 
    }
    if(listar){
    console.log('============'.green); 
    console.log(`Tabla del: ${base}`.red);
    console.log('============'.green); 
    console.log(salida.blue);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;

    }catch(err){
        throw err;
    }
}



module.exports = { // esto permite exportar funciones a otro archivo, que en este caso sera hacia app.js 
    crearArchivo // se coloca el metodo, si solo se pone el metodo el nombre de este se recibira con el nombre del metodo
     // se puede asignar un nombre a lo que se quiere exportar, como por ejemplo funcion: crearArchivo, donde funcion seria el nombre con el cual se recibiria 
}