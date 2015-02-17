var karmaConfig = require('./karma-base.js');

var customLaunchers = require('./karma-browsers.js');

module.exports = function(config) {

	karmaConfig.sauceLabs: {
		testName: 'STAN Loader',
		public: 'public',
		build: process.env.TRAVIS_BUILD_NUMBER
	};

	karmaConfig.customLaunchers = customLaunchers;

	karmaConfig.browsers = Object.keys(customLaunchers);

	karmaConfig.logLevel = config.LOG_INFO;

	config.set(karmaConfig);

};
