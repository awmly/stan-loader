/**
 * Test using the following commands
 *
 * karma start tests/karma-saucelabs.js 'Windows 7' chrome
 * karma start tests/karma-saucelabs.js 'OS X 10.10' chrome
 * karma start tests/karma-saucelabs.js 'Windows 7' firefox
 * karma start tests/karma-saucelabs.js 'OS X 10.10' firefox
 * karma start tests/karma-saucelabs.js 'OS X 10.10' safari
 * karma start tests/karma-saucelabs.js 'Windows 7' 'internet explorer' 11
 * karma start tests/karma-saucelabs.js 'Windows 7' 'internet explorer' 10
 * karma start tests/karma-saucelabs.js 'Windows 7' 'internet explorer' 9
 * karma start tests/karma-saucelabs.js 'Linux' android 5
 * karma start tests/karma-saucelabs.js 'OS X 10.10' iphone 8.1
 * karma start tests/karma-saucelabs.js 'OS X 10.10' ipad 8.1
 */

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

	// Set sauce labs credentials
	process.env.SAUCE_USERNAME = require('./sauce').username;
	process.env.SAUCE_ACCESS_KEY = require('./sauce').accessKey;

	// Set sauce labs object
	karmaConfig.sauceLabs = {
		public: 'public',
		testName: 'STAN Loader Tests',
		build: 'local'
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
