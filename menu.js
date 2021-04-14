const venom = require('venom-bot');
const textos = require('./manifest.json');

const menu = function(client, message) {  
    venom
    client
    .sendText(message.from, textos.Menu)
    .then((result) => {
        console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
    });
}
module.exports = menu;