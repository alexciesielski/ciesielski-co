// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
(function () {
   'use strict';
	module.exports = function(grunt) {

	  grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
		  /*options: {
				reporter: require('jshint-stylish')
			},*/
		  // when this task is run, lint the Gruntfile and all js files in src
		  build: ['Gruntfile.js', 'app/js/app.module.js', 'app/js/app.controller.js']
		},
		
		uglify: {
		  options: {
			banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
		  },
		  build: {
			files: {
			  //'app/dist/js/<%= pkg.name %>.min.js': ['app/js/app.module.js', 'app/js/app.controller.js', 'app/js/creative.js', 'app/js/typed.min.js']
			  //'app/dist/js/<%= pkg.name %>.min.js': 'app/js/*.js'
			  'app/dist/js/uglified-angular-libs.min.js': 'app/js/angu*.js'
			}
		  }
		},
		
		less: {
		  build: {
			files: {
			  'app/dist/css/<%= pkg.name %>.css': 'app/less/app.less'
			  //'app/css/creative.css': 'app/less/app.less'
			}
		  }
		},
		
		cssmin: {
		  options: {
			banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
		  },
		  build: {
			files: {
			  'app/dist/css/<%= pkg.name %>.min.css': 'app/dist/css/<%= pkg.name %>.css'
			}
		  }
		}

	  });

	  grunt.loadNpmTasks('grunt-contrib-jshint');
	  grunt.loadNpmTasks('grunt-contrib-uglify');
	  grunt.loadNpmTasks('grunt-contrib-less');
	  grunt.loadNpmTasks('grunt-contrib-copy');
	  grunt.loadNpmTasks('grunt-contrib-cssmin');
	  grunt.loadNpmTasks('grunt-contrib-watch');

	  // Grunt default task  
	  grunt.registerTask('default', ['jshint', 'uglify', 'less', 'cssmin']);
	  
	};
}());