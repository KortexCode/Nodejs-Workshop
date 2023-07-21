let suma = 0;
console.time('todo');
console.time('bucle');
for (let index = 0; index < 1000000; index++) {
    suma +=1;
    
}
console.timeEnd('bucle')

console.time('bucle1');
for (let index = 0; index < 10000000; index++) {
    suma +=1;
    
}
console.timeEnd('bucle1');
console.timeEnd('todo');