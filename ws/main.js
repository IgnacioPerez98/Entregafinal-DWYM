// Importing the required modules
const WebSocketServer = require('ws');

// Creating a new websocket server
const wss = new WebSocketServer.Server({ noServer: true })
let clients = new Set();



// Creating connection using websocket
wss.on("connection", ws => {
    clients.add(ws);
    console.log("new client connected");
 
    // sending message to client

    ws.send(JSON.stringify({ message: 'Welcome, you are connected!' }));
    
    //on message from client
    ws.on("message", data => {
        clients.forEach((client) => {
            if (client.readyState === WebSocketServer.OPEN) {
                console.log(`${data}`)
                const input = `${data}`;

                // Parse the input JSON string
                const parsedInput = JSON.parse(input);

                client.send(JSON.stringify({ message: parsedInput }));
            }
        });
        console.log(`Client has sent us: ${data}`)
    });
 
    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("the client has connected");
    });
    // handling client connection error
    ws.onerror = function () {
        clients.delete(ws);
        console.log("Some Error occurred")
    }
});

//console.log("The WebSocket server is running on port 8080");

module.exports = wss;