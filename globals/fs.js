//FORMA ASYNCRONA CON CALLBACK
/* const fs = require('fs');

function leer(){

    fs.readFile(__dirname + '/archivo.txt', {encoding: 'utf-8'}, (err, data)=>{
        console.log(data);
    })
}

leer(); */

//FORMA ASYNCRONA CON PROMESAS
const fs = require('fs/promises');

async function write(ruta, data){
    try{
        await fs.writeFile(ruta, data)

    }catch(error){
        console.error("Ocurrió un error", error);
    }
}

write(__dirname + '/newArchivo.txt', 'Soy nuevo chikorita')

async function borrar(filename){
    try {
        await fs.unlink(filename)
    } catch (error) {
        console.error("Ocurrió un error al borrar", error)
    }
}

borrar(__dirname + '/archivo.txt');