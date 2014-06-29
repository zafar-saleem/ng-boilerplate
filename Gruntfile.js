module.exports = function (grunt) {
	grunt.initConfig({

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			target: {
				src: 'src/js/*.js'
			}
		},

		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			target: {
				src: 'src/css/*.css'
			}
		},

		copy: {
			dist: {
				cwd: 'src/', expand: true, src: '**', dest: 'dist/'
			}
		},

		cssmin: {
			options: {},
			target: {
				src: 'dist/css/**/*.css',
				dest: 'dist/styles/styles.min.css'
			}
		},

		concat: {
 			target: {
 				src: ['dist/js/libs/angular/angular.min.js', 'dist/js/**/*.js'], // make sure angularjs is loaded first
 				dest: 'dist/js/compiled.js'
 			}
 		},

		uglify: {
 			options: {
 				compress: true
 			},
 			target: {
 				src: 'dist/js/compiled.js',
 				dest: 'dist/scripts/scripts.min.js'
  			}
  		},

		// Deletes all .js files, but skips min.js files
		clean: ['dist/js/', 'dist/css/'],

		processhtml: {
			dist: {
				files: {
					'dist/index.html': ['src/index.html']
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
					'dist/index.html': 'dist/index.html'
				}
			}
		}

	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.registerTask('default', [
			'jshint', 
			'csslint', 
			'copy',
			'concat',
			'uglify',
			'cssmin', 
			'clean', 
			'processhtml', 
			'htmlmin'
		]
	);
}
