const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const wss = require('./main.js'); // Import the WebSocket server

server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws);
    });
});

server.listen(3000, '10.13.110.118', () => {
    console.log('Server started');
});