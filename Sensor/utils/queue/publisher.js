var amqplib = require('amqplib');

async function addToQueue (queue, data) {
  try{
    const connection  = await amqplib.connect('amqp://localhost');
    const channel = await connection.createChannel();
        
    await channel.assertQueue(queue, {
      durable: true
    });
    
    if(data){
      channel.sendToQueue(queue, Buffer.from(JSON.stringify(data), {
        persistent: true
      }));
    }
    
    setTimeout(function() {
      connection.close();
    }, 10000);
  }
  catch(err) {
    console.log(err);
  }
}

module.exports = {
  addToQueue
}