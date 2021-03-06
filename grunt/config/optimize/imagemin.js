/**
 * Configuration for imagemin task(s)
 */

const taskConfig = (grunt) => {
  grunt.config.set('imagemin', {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= yeogurt.client %>/images',
        src: '**/*.{png,jpg,jpeg,gif}',
        dest: '<%= yeogurt.dist %>/images'
      }]
    }
  })
}

module.exports = taskConfig
