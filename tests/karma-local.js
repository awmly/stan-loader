var karmaConfig = require('./karma-base.js');

module.exports = function(config) {

	karmaConfig.browsers = ['Chrome', 'Firefox', 'Safari'];

	karmaConfig.logLevel = config.LOG_INFO;

	config.set(karmaConfig);

};
