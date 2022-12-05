const getData = (config) => {
  return fakeData(config);
};

const fakeData = (config) => {
  return config.VALUE_RANGE[0] +
    Math.random()*(config.VALUE_RANGE[1] - config.VALUE_RANGE[0]) 
}

module.exports = {
  getData
}