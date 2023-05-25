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
    var estilo = req.body.estilo;
    var mscMomento = req.body.mscMomento;
    var idioma = req.body.idioma;
    var artista = req.body.artista;


  /*  ESTILO */
    if (estilo == undefined) {
        res.status(400).send("Seu estilo musical está undefined!");
    }

    musicaModel.cadastrar(estilo).then(function(resposta){
        res.status(200).send("Estilo cadastrado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })


/*     MUSICA DO MOMENTO
 */
if (mscMomento == undefined) {
    res.status(400).send("Sua música do momento está undefined!");
}

musicaModel.cadastrar(mscMomento).then(function(resposta){
    res.status(200).send("Música do momento cadastrado com sucesso");
}).catch(function(erro){
    res.status(500).json(erro.sqlMessage);
})


/* IDIOMA */
if (idioma == undefined) {
    res.status(400).send("Seu idioma está undefined!");
}

musicaModel.cadastrar(idioma).then(function(resposta){
    res.status(200).send("Idioma cadastrado com sucesso");
}).catch(function(erro){
    res.status(500).json(erro.sqlMessage);
})


/* 
ARTISTA */

if (artista == undefined) {
    res.status(400).send("Seu artista está undefined!");
}

musicaModel.cadastrar(artista).then(function(resposta){
    res.status(200).send("artista cadastrado com sucesso");
}).catch(function(erro){
    res.status(500).json(erro.sqlMessage);
})




}

module.exports = {
    listar,
    cadastrar
}