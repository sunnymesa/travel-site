var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');



gulp.task("styles", function() {
	console.log("task: styles ...");

	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, nested, cssVars, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
})

