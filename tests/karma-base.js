module.exports = {

	frameworks: ['jasmine'],

	files: [
		'../stan-loader.min.js',
		'test.js'
	],

	reporters: ['spec'],

	port: 9876,

	colors: true,

	autoWatch: true,

	singleRun: true

}
