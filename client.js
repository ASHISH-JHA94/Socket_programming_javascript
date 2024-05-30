const net = require('net');
const readline = require('readline');

const PORT = 8080;
const HOST = 'localhost';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new net.Socket();

client.connect(PORT, HOST, () => {
    console.log('Connected to server');
    rl.question('Enter message to send to server: ', (message) => {
        client.write(message);
    });
});

client.on('data', (data) => {
    console.log(`Server: ${data}`);
    client.destroy();
});

client.on('close', () => {
    console.log('Connection closed');
    rl.close();
});
