module.exports = function(grunt) {

	var config = {

		pkg: grunt.file.readJSON('package.json'),

		banner: '/*!\n' + ' * STAN Loader <%= pkg.version %>\n' + ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' + ' */\n',

		watch: {
			html: {
				files: ['index.html']
			},
			js: {
				files: ['stan-loader.js'],
				tasks: ['uglify']
			}
		},

		connect: {
			server: {
				options: {
					base: ["tests", "./"],
					hostname: "0.0.0.0",
					port: 8080,
					open: true
				}
			}
		},

		uglify: {
			dist: {
				options: {
					banner: '<%= banner %>',
				},
				files: {
					'stan-loader.min.js': ['stan-loader.js']
				}
			}
		}

	};

	// Init grunt config
	grunt.initConfig(config);

	// Load node modules
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register tasks
	grunt.registerTask('default', ['uglify', 'connect', 'watch']);

};
