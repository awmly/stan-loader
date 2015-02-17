// Get base config
var karmaConfig = require('./karma-base.js');

// Get platform/browser/version from passed args
var platform = process.argv[4];
var browser = process.argv[5];
var version = process.argv[6];

// Set custom launcher object
var customLaunchers = {
	'SL_Browser': {
		base: 'SauceLabs',
		browserName: browser,
		platform: platform
	}
};

// Add version number if set
if (version) {
	customLaunchers.SL_Browser.version = version;
};


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
