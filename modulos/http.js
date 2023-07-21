const http = require("http");

console.log("empezando server");
http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva petición!");
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.write("<h1>Bienvenido</h1> <p>Este es un servidor de NODE js</p>");
      res.end();
      break;
    case "/hola":
      let saludo = hola();
      res.write(saludo);
      res.end();
      break;
    case "/info":
      res.writeHead(201, { "Content-Type": "text/plain" });
      res.write("Información privada");
      res.end();
      break;
    default:
      res.write("Error 404: No se lo que quieres");
      res.end();
  }
  setTimeout(() => {
    console.log("antes de esperando url");
  }, 3000);
  console.log("esperando url");
  // res.writeHead(201, { 'Content-Type': 'text/plain' })

  // // Escribir respuesta al usuario
  // res.write('Hola, ya se usar HTTP de NodeJS');

  // res.end();
}

function hola() {
  return "Hola, que tal";
}

console.log("Escuchando http en el puerto 3000");
