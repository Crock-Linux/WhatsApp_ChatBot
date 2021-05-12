const textos = require('../manifest.json');

const menu = function(client, message, user) {
    //Encaminha o texto de segunda via
    if(message.body === '1'){
        client
        .sendText(message.from, textos.opcoes.primeira.op1)
        .then((result) => {
            //console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
        user.state = 'segundaVia'
        return
    };

    //Encaminha o texto de encaminhar comprovante
    if(message.body === '2') {
        client
        .sendText(message.from, "Nos incaminhe uma foto do comprovante:")
        .then((result) => {
            //console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
        user.state = 'comprovante'
        return;
    };

    //Encaminha o texto de suporte fibra
    if(message.body === '3') {
        client
        .sendText(message.from, textos.opcoes.terceira.texto)
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
        user.state = 'suporte'
        return;
    };

    //Encaminha o texto de alteração de data
    if(message.body === '4') {
        client
        .sendText(message.from, "Alteração De data")
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
        user.state = 'alterarData'
        return
    };

    //Encaminha o texto de contratar serviço
    if(message.body === '5') {
        client
        .sendText(message.from, textos.opcoes.segunda)
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
        user.state = 'contratarServiço'
        return
    };
    
}

module.exports = menu;