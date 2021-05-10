const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatBot')
    .then(() => console.log('Conectado ao BD...'))
    .catch(err => console.log('não foi possivel conectar ao BD...', err));


const interesseSchema = new mongoose.Schema({
    nome: String,
    tel: String,
    interesse: String,
    cep: String,
    numero: String,
    date: {type: Date, defalut: Date.now}
});

const ChamadoInteresse = mongoose.model('Interesse', interesseSchema);

module.exports = ChamadoInteresse;