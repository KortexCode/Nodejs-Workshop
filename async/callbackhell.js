console.log('Iniciando proceso...');

function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(elCallback){
    setTimeout(()=>{
        console.log("bla bla bla")
    }, 2000);
    elCallback();
}

function adios(nombre, otroCallback) {
    setTimeout(function() {console.log('Adios', nombre); otroCallback();}, 5000);
}


hola('Alejandro', function (nombre) {
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nombre, function() {
                    console.log('Terminando proceso...');
                });
            })
        })
    })   
});