/**
 * Builds out an optimised site through minification of CSS and HTML, as well as uglification and optimisation of Javascript.
 */

const taskConfig = (grunt) => {
  grunt.registerTask('build', 'Build a production ready version of your site.', [
    'clean:dist',
    'injector',
    'copy:dist',
    'concurrent:compile',
    'autoprefixer:server',
    'useminPrepare',
    'concat:generated',
    'usemin',
    'htmlmin:dist',
    'uglify',
    'clean:temp'
  ])
}

module.exports = taskConfig
