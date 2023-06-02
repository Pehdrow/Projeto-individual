var musicaModel = require("../models/musicaModel");


function listar(req, res) {
    musicaModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var estilo = req.body.estiloServer;
    var mscMomento = req.body.mscMomentoServer;
    var idioma = req.body.idiomaServer;
    var artista = req.body.artistaServer;
    var fkUsuario = req.body.fkUsuarioServer;

    if (estilo == undefined) {
        res.status(400).send("Seu estilo está undefined!");
    } else if (mscMomento == undefined) {
        res.status(400).send("Sua música está undefined!");
    } else if (idioma == undefined) {
        res.status(400).send("Sua idioma está undefined!");
    }else if (artista == undefined) {
        res.status(400).send("Seu artista está undefined!");
    } else {

    musicaModel.cadastrar(estilo, mscMomento, idioma, artista, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );



}
}
module.exports = {
    listar,
    cadastrar
}