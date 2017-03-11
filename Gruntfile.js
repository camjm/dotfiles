module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-copy');

  var homePath = process.env.USERPROFILE + '/';

  grunt.initConfig({
    copy: {
      git: {
        files: [{
          src: 'Git/.gitconfig',
          dest: homePath + '.gitconfig'
        }, {
          src: 'Git/.gitignore',
          dest: homePath + '.gitignore_global'
        }],
        options: {
          process: function(content, srcpath) {
            var user = grunt.file.readJSON('Git/user.json');
            return grunt.template.process(content, {data: user});
          }
        }
      }
    }
  });

  grunt.registerTask('install', ['copy:git']);
  grunt.registerTask('default', ['install']);

};
