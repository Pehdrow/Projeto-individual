var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    dashboardController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashboardController.listar(req, res);
});

router.post('/votarGenero', function (req, res) {
    dashboardController.votarGenero(req, res)
})

router.get('/generos', function(req, res) {
    dashboardController.generos(req, res)
})

module.exports = router;