const express = require('express')
const router = express.Router();
const cadastroController = require('../controllers/cadastroController')

router.post('/cadastro', cadastroController.novoCadastro)


module.exports = router;