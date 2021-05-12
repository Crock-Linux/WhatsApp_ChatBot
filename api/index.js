const express = require('express');
const ChamadoInteresse = require('./database/mongodb');

const app = express();
app.use(express.json());

<<<<<<< HEAD
<<<<<<< HEAD
app.post('/api/chatbot/chamados', (req, res) => {
=======
app.get('/api/chatbot/chamados/:name/:tel/:interesse/:cep/:numero', (req, res) => {
>>>>>>> 572dcc6800ea5b9442b5757d94ae14d02390bb76
    async function salvaChamado() {
        try {
            const chamado = new ChamadoInteresse({
                nome: req.body.name,
=======

app.post('/api/chatbot/chamados', (req, res) => {
    async function salvaChamado() {
        try {
            const chamado = new ChamadoInteresse({
                nome: req.body.nome,
>>>>>>> 6e7625f219a66e388cbf4481dbcf8fb5c62af16c
                tel: req.body.tel,
                interesse: req.body.interesse,
                cep: req.body.cep,
                numero: req.body.numero
            });
    
            const result = await chamado.save()
            console.log(result);
            res.send(result)
        }
<<<<<<< HEAD
        catch (err) {
=======
        catch(err) {
>>>>>>> 6e7625f219a66e388cbf4481dbcf8fb5c62af16c
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