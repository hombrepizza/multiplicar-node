const opts = {
    base: {
        demand: true,
        alias: "b",
    },
    limite: {
        alias: "l",
        default: "pone algo gil ql",
    }
}



const argv = require("yargs")
    .command("listar", "Imprime en consola las tablas de multiplicar", opts)
    .command("crear", "Crea un archivo con las tablas de multiplicar", opts)
    .help()
    .argv;

module.exports = {
    argv
};