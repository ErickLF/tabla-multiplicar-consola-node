const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la tabla"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola"
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Limite hasta donde multiplicar"
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    if (isNaN(argv.h)) {
      throw "El limite tiene que ser un numero";
    }
    return true;
  }).argv;
//console.log(argv);

module.exports = argv;
