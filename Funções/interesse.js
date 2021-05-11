const textos = require('../manifest.json');

const interesse = function(client, message, user) {

    if(!user.estagio) {
        console.log('CHAMOU A FUNÇÃO!')
        user.nome = message.content

        client
        .sendText(message.from, "Qual o seu interesse?\n\n1-Fibra\n\n2-Data Center\n\nDigite a opção numerica da opção desejada!")
        .then((result) => {
            //console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
        
        user.estagio = 'interesse'
        console.log(user)
        return
    }

    if (user.estagio === 'interesse') {

    }

}

module.exports = interesse;