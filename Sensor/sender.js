const sensor = require('./utils/sensor');
const moment = require('moment');
const publisher = require('./utils/queue/publisher');

const initSendThread = async () => {
  let lastTimeSend = moment();
  while (1) {
    const config = require('./configs/config.json');
    const durationEachSend = 1 / config.DATA_SEND_FREQUENCY * 1000;     // milliseconds 

    if ((moment() - moment(lastTimeSend)) >= durationEachSend) {
      await publisher.addToQueue('sensor-data', {
        config,
        currentValue: sensor.getData(config),
        timeStamp: moment(),
      })
      console.log('Send success', {
        config,
        currentValue: sensor.getData(config),
        timeStamp: moment(),
      })

      lastTimeSend = moment();
    }

  }
}

initSendThread();