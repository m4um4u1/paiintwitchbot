const tmi = require('tmi.js');
const client = new tmi.Client({
  options: { debug: true, messagesLogLevel: "info" },
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: 'paiinilbot',
    password: 'oauth:6i81qk7e4vz6b0h861frl769hwt4ur'
  },
  channels: [ 'paiinilive' ]
});
client.connect().catch(console.error);

client.on('message', (channel, tags, message, self) => {
  if(self || !message.startsWith('!')) return;

  const args = message.slice(1).split(' ');
  const command = args.shift().toLowerCase();

  if(command === 'echo') {
    client.say(channel, `@${tags.username}, du hast: "${args.join(' ')}" gesagt!`);
  }
});

