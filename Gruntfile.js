module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: [
					'vendor/front-end/jquery/dist/jquery.min.js',
					'vendor/front-end/bootstrap/dist/js/bootstrap.min.js',
					'src/client.js',
					'src/front-end/codemirror/lib/codemirror.css'
				],
				dest: 'dist/built.js',
			},
		},
		less: {
			options: {
				//paths: ["src/", "vendor/front-end/"],
				cleancss: true,
			},
			files: {
				"dist/apiclient.css": ["src/client.css", "vendor/front-end/codemirror/lib/codemirror.css", ]
			}
		}
	});
  
  
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['uglify']);
};