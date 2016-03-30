// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
(function () {
   'use strict';
	module.exports = function(grunt) {

	  grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		copy: {
		  main: {
			files: [
			// copy img folder
			{
				expand: true,
				cwd: 'app/img/',
				src: '**',
				dest: 'app/dist/img/',
			},
			// copy i18n folder
			{
				expand: true,
				cwd: 'app/i18n/',
				src: '**',
				dest: 'app/dist/i18n/',
			},
			// copy fonts folder
			{
				expand: true,
				cwd: 'app/fonts/',
				src: '**',
				dest: 'app/dist/fonts/',
			}]
		  }
		},
		
		less: {
		  build: {
			files: {
			  //'app/dist/css/<%= pkg.name %>.css': 'app/less/app.less'
			  'app/css/<%= pkg.name %>.css': 'app/less/<%= pkg.name %>.less'
			}
		  }
		},

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
			  'app/dist/js/<%= pkg.name %>.min.js': 'app/js/app*.js'
			}
		  }
		},		
		
		cssmin: {
		  build: {
			files: {
			  //'app/dist/css/<%= pkg.name %>.min.css': 'app/css/<%= pkg.name %>.css'
			  'app/dist/css/<%= pkg.name %>.min.css': ['app/css/ciesielski-co.bootstrap.min.css' , 'app/css/flag-icon.min.css', 'app/css/font-awesome.min.css', 'app/css/animate.min.css', 'app/css/Merriweather400,300,300italic,400italic,700,700italic,900,900italic.css', 'app/css/OpenSans300italic,400italic,600italic,700italic,800italic,400,300,600,700,800.css', 'app/css/<%= pkg.name %>.css']
			}
		  }
		},
		
		concat: {
			options: {
			  separator: ';',
			},
			dist: {
			  src: ['app/js/jquery.js', 'app/js/bootstrap.min.js', 'app/js/angular.min.js', 'app/js/firebase.js', 'app/js/angularfire.min.js'],
			  dest: 'app/dist/js/jquery-bootstrap-angular-firebase-angularfire.js',
			},
		  },
		
		

	  });

	  grunt.loadNpmTasks('grunt-contrib-jshint');
	  grunt.loadNpmTasks('grunt-contrib-uglify');
	  grunt.loadNpmTasks('grunt-contrib-less');
	  grunt.loadNpmTasks('grunt-contrib-copy');
	  grunt.loadNpmTasks('grunt-contrib-cssmin');
	  grunt.loadNpmTasks('grunt-contrib-watch');
	  grunt.loadNpmTasks('grunt-contrib-concat');
	  grunt.loadNpmTasks('grunt-contrib-compress');
	  grunt.loadNpmTasks('grunt-html-build');


	  // Grunt default task  
	  grunt.registerTask('default', ['less', 'jshint', 'uglify', 'cssmin']);
	  
	};
}());