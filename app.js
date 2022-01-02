const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");
console.clear();

// console.log(process.argv);
//console.log("base: yargs: ", argv.base);

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(base);
const base = argv.b;
const listar = argv.l;
const limite = argv.h;

crearArchivo(base, listar, limite)
  .then(nombreArchivo => {
    console.log(nombreArchivo.rainbow, "creado");
  })
  .catch(err => console.log(err));
