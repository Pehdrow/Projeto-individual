var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM musica;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function cadastrar(estilo, mscMomento, idioma, artista) {
    var instrucao = `
        INSERT INTO musica (estilo, mscMomento, idioma, artista) VALUES ('${estilo}, ${mscMomento}, ${idioma}, ${artista}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
 

module.exports = {
    cadastrar,
    listar
};