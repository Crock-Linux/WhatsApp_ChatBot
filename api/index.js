const express = require('express');
const ChamadoInteresse = require('./database/mongodb');

const app = express();
app.use(express.json());

<<<<<<< HEAD
app.post('/api/chatbot/chamados', (req, res) => {
=======
app.get('/api/chatbot/chamados/:name/:tel/:interesse/:cep/:numero', (req, res) => {
>>>>>>> 572dcc6800ea5b9442b5757d94ae14d02390bb76
    async function salvaChamado() {
        try {
            const chamado = new ChamadoInteresse({
                nome: req.body.name,
                tel: req.body.tel,
                interesse: req.body.interesse,
                cep: req.body.cep,
                numero: req.body.numero
            });
    
            const result = await chamado.save()
            console.log(result);
            res.send(result)
        }
        catch (err) {
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