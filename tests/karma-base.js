module.exports = {

	// Set jasmine as the testing framework
	frameworks: ['jasmine'],

	// Set files to load
	files: [
		'../stan-loader.min.js',
		'test-load-ok.js',
		'test-load-error.js'
	],

	// Set reporter
	reporters: ['spec'],

	port: 9876,

	colors: true,

	autoWatch: true,

	singleRun: true

}
