// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const textos = require('./manifest.json');
const menu = require('./menu');
//const manifest = require('manifest.json');

venom
  .create({headless: false})
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    
    menu(client, message)
    
  });


  
}

