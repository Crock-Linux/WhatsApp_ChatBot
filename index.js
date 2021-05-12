const venom = require('venom-bot');
const mainFunction = require('./main');

venom
  .create({headless: false})
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

<<<<<<< HEAD
function start(client) {
  client.onMessage((message) => {
    mainFunction(client, message)
=======
async function start(client) {
  await client.onMessage((message) => {
    if (message.isGroupMsg === false) {
        mainFunction(client, message)
    };
>>>>>>> 6e7625f219a66e388cbf4481dbcf8fb5c62af16c
  });
}

