const path = require("path");
//Convierte strings en una ruta según el sistema operativo
const ROOT = path.join("//projects", "/webAPP", "index.js");
console.log(ROOT); //--> /projects/webAPP/index.js

console.log(path.basename(ROOT)); //--> index.js
console.log(path.parse(ROOT));

//-->
/* {
  root: '/',
  dir: '/projects/webAPP',
  base: 'index.js',
  ext: '.js',
  name: 'index'
} */
console.log(path.resolve("finalRoot"));
// --> /home/kortexcode/proyectosWeb/Nodejs-Workshop/finalRoot
