var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixinsImport = require("postcss-mixins");



gulp.task("styles", function() {
	console.log("task: styles ...");

	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixinsImport, nested, cssVars, autoprefixer]))
		.on("error", function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit("end");
		})
		.pipe(gulp.dest('./app/temp/styles'));
})

