const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('The bot is ready!');
});

client.on('message', message => {
	if(message.body === "Maaf ya, aku ga bisa") {
		client.sendMessage(message.from, 'Oh oke, maaf ya mengganggu hehe..');
        console.log('NT MOMENT BANHJ')
	}
    else
    if(message.body === "Hi") {
		client.sendMessage(message.from, 'Halo juga');
    }
});

client.initialize();