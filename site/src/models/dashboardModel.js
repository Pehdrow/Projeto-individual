var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM carro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome) {
    var instrucao = `
        INSERT INTO carro (nome) VALUES ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votarGenero(idUsuario, idGenero) {
    var instrucao = `INSERT INTO usuarioGenero VALUES (${idGenero}, ${idUsuario})`
    return database.executar(instrucao)
}

function generos() {
    var instrucao = 'select nomeGenero ,count(id) as favoritos from genero left join usuarioGenero on fkGenero = idGenero left join usuario on fkUsuario = id group by nomeGenero;'
    return database.executar(instrucao)
}

module.exports = {
    cadastrar,
    listar,
    votarGenero,
    generos
};