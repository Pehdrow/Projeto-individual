var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM musica;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function cadastrar(estilo, mscMomento, idioma, artista, fkUsuario) {
    var instrucao = `
        INSERT INTO musica (estilo, mscMomento, idioma, artista, fkUsuario) VALUES ('${estilo}', '${mscMomento}', '${idioma}', '${artista}', ${fkUsuario}) `;
   ;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
 

module.exports = {
    cadastrar,
    listar
};