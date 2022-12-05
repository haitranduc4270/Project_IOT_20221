const fs = require('fs');

const connectToFarmGateway = async (req, res) => {
  console.log(req);
  res.json({
    status: 'success',
  });
}

const changeConfig = async (req, res) => {
  const config = require('../configs/config.json');
  config.id = Math.random() * 10;

  fs.writeFileSync('configs/config.json', JSON.stringify({...config, ...req.body.updateConfig}, null, 4));

  res.json({
    status: 'Set config success',
  });
}

module.exports = {
  connectToFarmGateway,
  changeConfig
}