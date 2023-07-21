
function asincrona(callback) {
    setTimeout(()=> {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error, null);
        }
    }, 1000)
}

asincrona((err, data)=>{
    if(err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
    }
    console.log('todo fue bien', data);
})