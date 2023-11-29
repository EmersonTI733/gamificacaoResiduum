const express = require('express');
const router = express.Router();

const cadastrar = require('./controllers/cadastrarParticipante');
const cadastraResiduo = require('./controllers/adicionarResiduo');
const buscarDados = require('./controllers/buscarDados');



router.post('/cadastrar/participante', cadastrar.criarParticipante);
router.post('/cadastrar/residuo', cadastraResiduo.adicionarResiduo);

router.get('/buscar/dados/08', buscarDados.BuscarDados_08);
router.get('/buscar/dados/09', buscarDados.BuscarDados_09);
router.get('/buscar/dados/10', buscarDados.BuscarDados_10);



module.exports = router;