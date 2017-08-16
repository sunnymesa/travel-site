var gulp = require('gulp');
var imagemin = require("gulp-imagemin");
var del =require("del");
var usemin = require("gulp-usemin");
var rev = require("gulp-rev");
var uglify = require("gulp-uglify");
var cssnano = require("gulp-cssnano");
var browserSync = require('browser-sync');


gulp.task("previewDist", function() {
    browserSync.init({
      notify: false,
      server: {
        baseDir: "dist"
      }
    });
});


gulp.task("deleteDistFolder", ['icons'], function() {
  return del("./dist");
})

gulp.task("copyGeneralFile", ['deleteDistFolder'], function() {
  var pathsToCopy = [
    "./app/**/*",
    "!./app/index.html",
    "!./app/assets/images/**",
    "!./app/assets/styles/**",
    "!./app/assets/scripts/**",
    "!./app/temp/",
    "!./app/temp/**"
  ];
  return gulp.src(pathsToCopy)
  .pipe(gulp.dest("./dist"));
});

gulp.task("optimizeImages", ["deleteDistFolder"], function() {
  return gulp.src([
    './app/assets/images/**/*',
    '!./app/assets/images/icons',
    '!./app/assets/images/icons/**/*'
    ])
  .pipe(imagemin({
    progressive:true,
    interlaced: true,
    multipass: true
  }))
  .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("useminTrigger", ["deleteDistFolder"], function() {
  gulp.start("usemin");
});
gulp.task("usemin", ["styles", "scripts"], function() {
  return gulp.src("./app/index.html")
  .pipe(usemin({
    css:[function() {
      return rev();
    }, function() {
      return cssnano();
    }],
    js: [function(){
      return rev();
    }, function() {
      return uglify();
    }]
  }))
  .pipe(gulp.dest("./dist"));
})

gulp.task('build', ["deleteDistFolder", 'copyGeneralFile', 'optimizeImages', 'useminTrigger']);
