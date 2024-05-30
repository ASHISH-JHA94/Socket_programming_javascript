const net = require('net');

const PORT = 8080;

const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log(`Client: ${data}`);
        socket.write(data);
        socket.end();
        console.log('Client disconnected');
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });

    socket.on('error', (err) => {
        console.error(err);
    });
});

server.on('error', (err) => {
    console.error(err);
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
