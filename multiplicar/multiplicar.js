//requireds
const fs = require("fs");
const colors = require('colors');

let listarTabla = (base, limite) => {
  console.log('========================='.green);
  console.log(`=======tabla del ${base}===========`.red);
  console.log('========================='.green);
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}\n`);
  }
};

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un numero`);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) throw err;
      console.log("Archivo creado:".red + `${base}`.green);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
