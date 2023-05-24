function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 1500);
    })
}

function hablar(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("bla bla bla");
            resolve();
        }, 2000); 
    })
    
}

function adios(nombre) {

    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve();
        }, 3000);
    })
    
}

async function main(){
    const name = await hola('Fransua');
    await hablar();
    await hablar();
    await adios(name);
}

main();