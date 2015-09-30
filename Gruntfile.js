module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss', 
                       'bower_components/compass-mixins/lib',
                       'bower_components/animate']  
      },
      dist: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'css/main.css': 'scss/main.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },

      js: {
        files: 'js/*.js',
        tasks: ['uglify']
      },

      options: { livereload: true, } //Add Live Reload Chrome Extension for this to work
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      dist:{
        files:{
          'css/app.css': 'css/app.css'
        }
      }
    },

    uglify: {
      all: {
        files: [{
          expand: true,
          cwd: 'js/',
          src: ['*.js'],
          dest: 'js/',
          ext: '.min.js',
        }],
      },
    },
    
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css'],
          dest: 'css/',
          ext: '.css'
        }]
      }
    },


  });

grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

grunt.registerTask('build', ['sass', 'autoprefixer', 'cssmin', 'uglify']);
grunt.registerTask('default', ['build','watch']);
};