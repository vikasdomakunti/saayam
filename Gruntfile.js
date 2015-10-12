module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('serve', ['connect:server']);
  grunt.registerTask('default', ['less','browserify','concurrent:default']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true,
          livereload: true
        }
      }
    },
    less: {
      compile: {
        files: {
          'public/css/index.css':  ['*.less','frontend/**/*.less']
        }
      }
    },
    watch: {
      js: {
        files: ['frontend/**/*.js','frontend/**/*.hbs'],
        tasks:['browserify']
      },
      less: {
        files: ['frontend/**/*.less'],
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
    },
    browserify: {
      dist: {
        files: {
          'public/js/bundle.js': ['frontend/**/*.js','frontend/**/*.hbs']
        },
        options: {
          transform: ['hbsfy']
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-browserify');
};

