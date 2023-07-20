const fs = require("fs");
const path = require("path");
//Podemos leer un archivo de algún formato de texto pero debemos tener en cuenta que será devuelto en formato buffer(datos crudos) osea sin ser convertido a un formato de datos que sea entendible para el humano
/* const fileRoot = path.resolve("/data/file.txt");
console.log(fileRoot); */
const file = fs.readFileSync("./data/file.txt");
console.log(file);
