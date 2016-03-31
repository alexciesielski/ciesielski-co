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
			},
			// copy flags folder
			{
				expand: true,
				cwd: 'app/flags/',
				src: '**',
				dest: 'app/dist/flags/',
			},
			// copy js folder
			{
				expand: true,
				cwd: 'app/js/',
				src: '**',
				dest: 'app/dist/js/',
			}
			
			]
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
		
		cssmin: {
			build: {
				files: {
					'app/dist/css/<%= pkg.name %>.min.css': [
					
						'app/css/ciesielski-co.bootstrap.min.css',
						'app/css/flag-icon.min.css',
						'app/css/font-awesome.min.css',
						'app/css/animate.min.css',
						'app/css/Merriweather400,300,300italic,400italic,700,700italic,900,900italic.css',
						'app/css/OpenSans300italic,400italic,600italic,700italic,800italic,400,300,600,700,800.css',
						'app/css/please-wait.css',
						'app/css/<%= pkg.name %>.css'
					]
				}
			}
		},

		jshint: {
			/*options: {
				reporter: require('jshint-stylish')
			},*/
			build: ['Gruntfile.js', 'app/js/app.module.js', 'app/js/app.controller.js']
		},
		
		uglify: {
			options: {
				mangle: false,
				//banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					//'app/dist/js/<%= pkg.name %>.min.js': ['app/js/app.module.js', 'app/js/app.controller.js', 'app/js/creative.js', 'app/js/typed.min.js']
					//'app/dist/js/<%= pkg.name %>.min.js': 'app/js/*.js'
					'app/dist/js/<%= pkg.name %>.min.js': ['app/js/app*.js']
				}
			}
		},		
		
		concat: {
			options: {
				separator: ';',
			},
			build: {
				src: [
					'app/js/libs/ciesielski-co.bootstrap.min.js',
					'app/js/libs/firebase.js',
					'app/js/libs/angularfire.min.js',
					'app/js/libs/angular-messages.js',
					'app/js/libs/angular-route.min.js',
					'app/js/libs/angular-sanitize.min.js',
					'app/js/libs/angular-translate.min.js',
					'app/js/libs/jquery.easing.min.js',
					'app/js/libs/jquery.fittext.js',
					'app/js/libs/typed.min.js',
					'app/js/libs/wow.min.js'
				],
				dest: 'app/dist/js/libs.js',
			},
		},
		
		htmlbuild: {
			dist: {
				src: 'app/index.html',
				dest: 'app/dist/',
				options: {
					logOptions: true,
					beautify: true,
					allowUnknownTags: true,
					styles: {
						bundle: [
							'app/dist/css/ciesielski-co.min.css'
						]
					}
				}
			}
		},
		
		uncss: {
			dist: {
				options: {
					ignore: [
						'.cv-table table ul',
						'.nav',
						'.navbar',
						'.navbar-default',
						'.navbar-default .navbar-header .navbar-brand',
						'.navbar-default.affix', 
						'.navbar-default.affix .nav > li > a'
					]
				},
				files: {
					'app/dist/css/ciesielski-co.min.css': ['app/dist/index.html']
				}
			}
		},
		
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'app/dist/index.html': 'app/dist/index.html'
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
	  grunt.loadNpmTasks('grunt-contrib-concat');
	  grunt.loadNpmTasks('grunt-contrib-compress');
	  grunt.loadNpmTasks('grunt-html-build');
	  grunt.loadNpmTasks('grunt-uncss');
	  grunt.loadNpmTasks('grunt-contrib-htmlmin');


	  // Grunt default task  
	  grunt.registerTask('default', ['copy', 'less', 'cssmin', 'jshint', 'uglify', 'concat', 'htmlbuild', 'htmlmin']);
	  
	};
}());