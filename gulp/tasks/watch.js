var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');

gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	})
	watch("./app/index.html", function() {
		browserSync.reload();
		// gulp.start('html');
	});
	watch("./app/assets/styles/**/*.css", function() {
		// gulp.start("styles");
		gulp.start('cssInject');
	});

	watch("./app/assets/scripts/**/*.js",function() {
			gulp.start("scriptsRefresh");
	})


});


gulp.task('cssInject', ['styles'], function() {
	gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task("scriptsRefresh", ["scripts"],
	function() {
		browserSync.reload();
	})
