module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('serve', ['connect:server']);
  grunt.registerTask('default', ['less','concurrent:default']);



  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true,
          livereload: true
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    less: {
      compile: {
        files: {
          'index.css':  ['frontend/**/*.less']
        }
      }
    },
    watch: {
      js: {
        files: ['frontend/**/*.js','frontend/**/*.html']
      },
      less: {
        files: ['frontend/**/*.less','frontend/*.less','frontend/**/**/*.less'],
        tasks:['less']
      },
      options: {
        spawn: true,
        livereload: true
      }
    },
    concurrent: {
      default: ['serve', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    }
  });


};

