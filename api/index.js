const express = require('express');
const ChamadoInteresse = require('./database/mongodb');

const app = express();
app.use(express.json());


app.post('/api/chatbot/chamados', (req, res) => {
    async function salvaChamado() {
        try {
            const chamado = new ChamadoInteresse({
                nome: req.body.nome,
                tel: req.body.tel,
                interesse: req.body.interesse,
                cep: req.body.cep,
                numero: req.body.numero
            });
    
            const result = await chamado.save()
            console.log(result);
            res.send(result)
        }
        catch(err) {
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