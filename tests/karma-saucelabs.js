/*
karma start tests/karma-saucelabs.js 'Windows 7' chrome
karma start tests/karma-saucelabs.js 'OS X 10.10' chrome
karma start tests/karma-saucelabs.js 'Windows 7' firefox
karma start tests/karma-saucelabs.js 'OS X 10.10' firefox
karma start tests/karma-saucelabs.js 'OS X 10.10' safari
karma start tests/karma-saucelabs.js 'Windows 7' 'internet explorer' 11
karma start tests/karma-saucelabs.js 'Windows 7' 'internet explorer' 10
karma start tests/karma-saucelabs.js 'Windows 7' 'internet explorer' 9
karma start tests/karma-saucelabs.js 'Linux' android 5
karma start tests/karma-saucelabs.js 'OS X 10.10' iphone 8.1
karma start tests/karma-saucelabs.js 'OS X 10.10' ipad 8.1
*/
var karmaConfig = require('./karma-base.js');

var platform = process.argv[4];
var browser = process.argv[5];
var version = process.argv[6];

var customLaunchers = {
	'SL_Browser': {
		base: 'SauceLabs',
		browserName: browser,
		platform: platform
	}
};

if (version) {
	customLaunchers.SL_Browser.version = version;
};

module.exports = function(config) {

	process.env.SAUCE_USERNAME = require('./sauce').username;
	process.env.SAUCE_ACCESS_KEY = require('./sauce').accessKey;

	karmaConfig.sauceLabs = {
		public: 'public',
		testName: 'STAN Loader Tests',
		build: 'local'
	};

	karmaConfig.reporters = ['saucelabs', 'spec'];

	karmaConfig.customLaunchers = customLaunchers;

	karmaConfig.browsers = Object.keys(customLaunchers);

	karmaConfig.logLevel = config.LOG_INFO;

	config.set(karmaConfig);

};
