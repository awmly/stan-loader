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

	// Don't run error test in IE8 as we know it will fail due to limitation of broswer
	karmaConfig.files = [
		'../stan-loader.min.js',
		'test-load-ok.js',
		'test-load-error.js'
	];

	// Set sauce labs object
	karmaConfig.sauceLabs = {
		public: 'public',
		testName: 'STAN Loader Tests',
	};

	// Set reporters
	karmaConfig.reporters = ['saucelabs', 'spec'];

	// Set custom launchers
	karmaConfig.customLaunchers = customLaunchers;

	// Set browser info from custom launchers
	karmaConfig.browsers = Object.keys(customLaunchers);

	// Set loglevel
	karmaConfig.logLevel = config.LOG_INFO;

	// Set config
	config.set(karmaConfig);

};
