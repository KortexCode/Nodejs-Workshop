function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 1500);
    })
}

function hablar(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("bla bla bla");
            resolve(nombre);
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

hola("Chikorita")
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((dta)=>console.log("Terminando proceso"));