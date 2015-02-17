var karmaConfig = require('./karma-base.js');

var browserSet = process.argv[4];

if (browserSet == 'main') {

	var customLaunchers = require('./karma-browsers-main.js');

} else if (browserSet == 'ie') {

	var customLaunchers = require('./karma-browsers-ie.js');

}

module.exports = function(config) {

	karmaConfig.sauceLabs = {
		public: 'public',
		testName: 'STAN Loader Tests',
	};

	karmaConfig.reporters = ['saucelabs', 'spec'];

	karmaConfig.customLaunchers = customLaunchers;

	karmaConfig.browsers = Object.keys(customLaunchers);

	karmaConfig.logLevel = config.LOG_INFO;

	config.set(karmaConfig);

};
