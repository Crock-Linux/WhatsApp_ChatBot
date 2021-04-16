const venom = require('venom-bot');
const textos = require('./manifest.json');
const dataBase = require('./Database/data')

const menu = function(client, message) {  

    if(dataBase.find(c => c.user == message.from)){
        const user = dataBase.find(c => c.user == message.from);
        if (user.state === 'menu' && message.body == '1') {
            client
            .sendText(message.from, textos.opcoes.terceira)
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
            user.state = 'suporte'
            console.log(dataBase)   
        }
    } else {
        let user = {

        }
        user.user = message.from;
        user.state = 'menu';
        dataBase.push(user);
        console.log(user);
        console.log('não achou')
        console.log(dataBase.find(c => c.user == message.from))
        client
        .sendText(message.from, textos.Menu)
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
    }

        
    
};


module.exports = menu;