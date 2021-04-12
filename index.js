// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const textos = require('./manifest.json');
//const manifest = require('manifest.json');

venom
  .create({headless: false})
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body.toLowerCase() === 'oi' && message.isGroupMsg === false) {
      client
      .sendText(message.from, textos.Menu)
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
    }

    if (message.body === '3' && message.isGroupMsg === false) {
      client
      .sendText(message.from, textos.opcoes.terceira.texto)
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
    }
    
  });


  
}

