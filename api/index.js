const express = require('express');
const ChamadoInteresse = require('./database/mongodb');

const app = express();

app.get('/api/chatbot/chamados/:name/:tel/:interesse/:cep/:numero', (req, res) => {
    async function salvaChamado() {
        try {
            const chamado = new ChamadoInteresse({
                name: req.params.name,
                tel: req.params.tel,
                interesse: req.params.interesse,
                cep: req.params.cep,
                numero: req.params.numero
            });
    
            const result = await chamado.save()
            console.log(result);
            res.send(result)
        }
        catch {
            console.log('Error', err.message);
        }
    }

    salvaChamado()
});

app.post('/api/chatbot/chamados/interesse', (req, res) => {

});


app.post('/api/chatbot/chamados/suportefibra', (req, res) => {

});

app.listen(5000, () => {
    console.log(`Server escutando na porta 5000...`)
});