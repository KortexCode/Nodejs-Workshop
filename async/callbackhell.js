console.log('Iniciando proceso...');

function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(elCallback){
    setTimeout(()=>{
        console.log("bla bla bla");
        elCallback();
    }, 2000); 
}

function adios(nombre, otroCallback) {
    setTimeout(function() {console.log('Adios', nombre); otroCallback();}, 5000);
}

//Forma callback hell
/* hola('Alejandro', function (nombre) {
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nombre, function() {
                    console.log('Terminando proceso...');
                });
            })
        })
    })   
}); */
//Forma corregida

function conversación(nombre, veces, callback){
    if(veces > 0){
        hablar(function(){
            conversación(nombre, --veces, callback)
        })
    }
    else{
        callback()
    }
}
hola('Alejandro', function (nombre) {
    conversación(nombre, 3, function(){
        adios(nombre, function() {
            console.log('Terminando proceso...');
        });
    })
});