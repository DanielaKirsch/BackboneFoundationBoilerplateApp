module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },
     requirejs: {
          production: {
            options: {
              baseUrl: "./js",
              mainConfigFile: "js/main.js",
              name: 'app',
              out: "whatsthat.js",
              optimize: 'uglify2',
              paths: {
                  requireLib: 'libs/require/require-min'
              },
              include: ["requireLib"]
              
            }
          },
        },
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('production', 'requirejs');
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}