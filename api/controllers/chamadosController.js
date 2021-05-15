const express = require('express');

const ChamadoInteresse = require('../models/interesse');
const ChamadoAlterarData = require('../models/alterardata');

const router = express.Router();

//Rota para salvar interesse Fibra ou Data center
router.post('/interesse', async (req, res) => {
    try {
        const chamado = await ChamadoInteresse.create(req.body);
        return res.send({ chamado });
    }
    catch (err) {
        return res.status(400).send({error: 'Resgistrarion failed'});
    }
});

//Rota para salvar chamados de alteração de data de vencimento.
router.post('/alterarData', async (req, res) => {
    try {
        const chamado = await ChamadoAlterarData.create(req.body);
        return res.send({ chamado })
    }
    catch (err) {
        return res.status(400).send({error: 'Resgistrarion failed'});
    }
})

module.exports = app => app.use('/api/chatbot/chamados', router);