const amqplib = require('amqplib');

let i = 0;
async function listenRequestQueue () {

    var queue = 'task_queue';
    const conn = await amqplib.connect('amqp://localhost');
    const channel = await conn.createChannel();
    await channel.assertQueue(queue);

    while(1){

        let message = false; 
        message = await channel.get(queue);
        
        if(message){
            console.log(JSON.parse(message.content.toString()));
            channel.ack(message);
        }
    }
};

listenRequestQueue()