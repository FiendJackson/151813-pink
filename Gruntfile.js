"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.initConfig({
    sass: {
      style: {
        files: {
          "css/style.css": "sass/style.scss"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 1 version",
              "last 2 Chrome versions",
              "last 2 Firefox versions",
              "last 2 Opera versions",
              "last 2 Edge versions"
            ]})
          ]
        },
        src: "css/*.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    watch: {
      style: {
        files: ["sass/**/*.{scss,sass}"],
        tasks: ["sass", "postcss"],
        options: {
          spawn: false
        }
      }
    },

 copy: {
   build: {
     files: [{
       expand: true,
       src: [
         "fonts/**/*.{woff,woff2}",
         "img/**",
         "js/**",
         "*.html"
       ],
       dest: "build"
     }]
   },
   html: {
     files: [{
       expand: true,
       src: ["*.html"],
       dest: "build"
     }]
     }
 },

  clean: {
    build: ["build"]
 },

 csso: {
   style: {
    options: {
       report: "gzip"
     },
     files: {
     "build/css/style.min.css": ["css/style.css"]
     }
   }
 },

 imagemin: {
   images: {
     options: {
       optimizationLevel: 3
     },
     files: [{
       expand: true,
       src: ["build/img/**/*.{png,jpg,gif}"]
     }]
   }
 }
});
  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", [
 "clean",
 "copy",
 "sass",
 "postcss",
 "csso",
 "imagemin"
 ]);
}
