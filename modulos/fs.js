const fs = require("fs");
//Podemos leer un archivo de algún formato de texto pero debemos tener en cuenta que será devuelto en formato buffer(datos crudos) osea sin ser convertido a un formato de datos que sea entendible para el humano

const file = fs.readFileSync("./data/file.txt", "utf-8");
const file2 = fs.readFileSync("./data/file.txt");
const file3 = file2.toString();

console.log(file);
console.log(file3);

const content = "Chainsaw tan raro";
//Crea un archivo nuevo llamado data.txt
fs.writeFileSync("./data/data.txt", content);
//Si el archivo esxiste, se puede usar una flag para decirle que sobreescriba y no que borre y cree
fs.writeFileSync("./data/data.txt", " las minas están locas", { flag: "a" });
