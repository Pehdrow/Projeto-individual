var express = require("express");
var router = express.Router();

var musicaController = require("../controllers/musicaController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    musicaController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    musicaController.listar(req, res);
});


module.exports = router;