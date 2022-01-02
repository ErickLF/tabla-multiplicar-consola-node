const fs = require("fs");

const crearArchivo = async (base = 5, listar = false, limite = 10) => {
  try {
    let salida = "";
    for (let i = 1; i <= limite; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("=====================".green);
      console.log("     TABLA DEL ", base);
      console.log("=====================".green);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo
};
