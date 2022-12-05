const { Server } = require('ws');
 
const sockserver = new Server({ port: 3000 });
sockserver.on('connection', (ws) => {
    console.log('New client connected!'); 
    ws.on('close', () => console.log('Client has disconnected!'));
});

setInterval(() => {
  sockserver.clients.forEach((client) => {
      const data = JSON.stringify({'type': 'time', 'time': new Date().toTimeString()});
      client.send(data);
  });
}, 1000);
