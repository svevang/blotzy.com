module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        bowerInstall: {

            target: {

                // Point to the files that should be updated when
                // you run `grunt bower-install`
                src: [
                      '*.html'
//                    'app/views/**/*.html',   // .html support...
//                    'app/views/**/*.jade',   // .jade support...
//                    'app/styles/main.scss',  // .scss & .sass support...
//                    'app/config.yml'         // and .yml & .yaml support out of the box!
                ],

                // Optional: 
                // --------- 
                cwd: '',
                dependencies: true,
                devDependencies: false,
                exclude: [],
                fileTypes: {},
                ignorePath: '',
                overrides: {}
            }
        }

    });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-install');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
