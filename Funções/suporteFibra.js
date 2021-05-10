const textos = require('../manifest.json');

const suporteFibra = function(client, message, user) {
    if(message.body === '1') {
        
    } else {
        client
        .sendText(message.from, textos.opcoes.terceira.texto)
        .then((result) => {
            //console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
        user.state = 'suporte'
    }
}

module.exports = suporteFibra;