const WebSocket = require('ws');
const socket = new WebSocket('ws://price-cmc-04.vndirect.com.vn/realtime/websocket');

// Connection opened
socket.addEventListener('open', (event) => {
    // socket.send('Hello Server!');
    console.log('Connected');
});

// Listen for messages
socket.addEventListener('message', (event) => {
    console.log('Message from server ', event.data);
});
