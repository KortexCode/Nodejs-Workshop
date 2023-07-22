const fs = require("fs");
const { promisify } = require("util");
//Podemos leer un archivo de algún formato de texto pero debemos tener en cuenta que será devuelto en formato buffer(datos crudos) osea sin ser convertido a un formato de datos que sea entendible para el humano

//Usando Sincronismo
/* const file = fs.readFileSync("./data/file.txt", "utf-8");
const file2 = fs.readFileSync("./data/file.txt");
const file3 = file2.toString();

console.log(file);
console.log(file3);

const content = "Chainsaw ta raro"; */
//Crea un archivo nuevo llamado data.txt
/* fs.writeFileSync("./data/data.txt", content); */
//Si el archivo esxiste, se puede usar una flag para decirle que sobreescriba y no que borre y cree
/* fs.writeFileSync("./data/data.txt", " las minas están locas", { flag: "a" }); */

//Usando Asincronismo con await y escritura de promesas

console.log("Se desea leer un archivo");

const getText = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });

async function getData() {
  try {
    const data = await getText("./data/file.txt");
    console.log("archivo listo");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
/* getData(); */

//Usando Promisify
const readFilePromise = promisify(fs.readFile);

async function getDataPromisify(path) {
  try {
    const data = await readFilePromise(path, "utf8");
    console.log("archivo listo");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
console.log("preparando archivo");

/* getDataPromisify("./data/file.txt"); */

//"Borrando un archivo"
/* fs.unlink("./data/toDelete.txt", (err) => {
  if (err) throw err;
  console.log("path/file.txt was deleted");
}); */

//Sintaxis más clara para async await
async function writeOrRead(data) {
  try {
    await fs.writeFile("./data/newArchivo.txt", data, (err) => {
      console.log(err);
    });
  } catch (error) {
    console.error("Ocurrió un error", error);
  }
}

/* writeOrRead("Soy nuevo chikorita"); */

//Usando una /Promise en el require
const { readFile } = require("fs/promises");

async function readFsPromise() {
  try {
    const lectura = await readFile("./data/newArchivo.txt", "utf-8");
    console.log(lectura);
  } catch (err) {
    console.error("Ocurrió un error", err);
  }
}

readFsPromise();
