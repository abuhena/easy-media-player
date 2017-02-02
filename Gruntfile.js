/**
 * Created by Shariar Shaikot on 1/9/16.
 */

const taskLoader = require('load-grunt-tasks');

module.exports = grunt => {
  taskLoader(grunt);
  grunt.initConfig({
    watch: {
      options: {
        livereload: true,
      },
      less: {
        files: ['src/css/*.less'],
        tasks: ['less'],
      },
      scripts: {
        files: ['src/js/{,*/}*.js'],
        tasks: ['browserify'],
      },
    },
    less: {
      all: {
        files: {
          './em-player.css': 'src/css/main.less',
        },
      },
    },
    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', {
              //loose: 'all',
            }],
          ],
        },
        files: {
          './em-player.js': ['src/js/{,*/}*.js'],
        },
      },
    },
    connect: {
      server: {
        options: {
          livereload: true,
          open: true,
          base: './',
          port: 8080,
        },
      },
    },
    uglify: {
      dist: {
        files: {
          './em-player.min.js': ['./em-player.js', './components/DateJS/build/production/date.min.js',
          './components/m-range-slider/mr.slider.min.js']
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          './em-player.min.css': ['./em-player.css', './components/font-awesome/font-awesome.min.css',
          './components/m-range-slider/mr.slider.min.css']
        }
      }
    }
  });
  grunt.registerTask('serve', [
    'connect',
    'watch',
  ]);
  grunt.registerTask('build', [
    'browserify',
    'less',
    'uglify',
    'cssmin'
  ]);
};
