var appConfig = require('./app-config.json');

module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');
	
	grunt.registerTask('buildTestAndRun', ['copy:useExternalFrontend', 'express:dev']);
	grunt.registerTask('default', ['buildTestAndRun', 'watch:frontendChanges']);
	
	grunt.initConfig({
		copy: {
			useExternalFrontend: {
		    expand: true,
		    // full path to front-end build
		    cwd: 'D:/projects/learn.angular.js/ngbp/ngbp/build/',
		    src: ['**'],
		    dest: 'src/public/'
		  }
		},
		express: {
	    options: {
	    	port: appConfig['dev'].port
	    },
	    dev: {
	      options: {
	        script: 'index.js'
	      }
	    }
	  },
		watch: {
		  frontendChanges: {
		    files: ['D:/projects/learn.angular.js/ngbp/ngbp/build/*'],
		    tasks: ['copy:useExternalFrontend']		    
		  }
		}
	});
};