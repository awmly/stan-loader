var karmaConfig = require('./karma-base.js');

module.exports = function(config) {

  // Set browsers - these must be installed on local machine
  karmaConfig.browsers = ['Chrome', 'Firefox', 'Safari'];

  // Set log level
  karmaConfig.logLevel = config.LOG_INFO;

  // Set config
  config.set(karmaConfig);

};
