const express = require('express');
const router = express.Router();

const cadastrar = require('./controllers/cadastrarParticipante');
const cadastraResiduo = require('./controllers/adicionarResiduo');
const buscarDados = require('./controllers/buscarDados');



router.post('/cadastrar/participante', cadastrar.criarParticipante);
router.post('/cadastrar/residuo', cadastraResiduo.adicionarResiduo);

router.get('/buscar/dados', buscarDados.buscarDados);



module.exports = router;