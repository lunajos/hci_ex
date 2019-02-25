'use strict'; // jshint node:true

const gulp = require('gulp');

const sass = require('gulp-sass');

//const plugins = require('gulp-load-plugins')({
//	pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*']
//});

const path = {
	styles: {
		src: './server/views/**/*.scss',
		dest: './public'
	}
};


gulp.task('sass', function  (done) {
	gulp.src(path.styles.src)
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(path.styles.dest));

	done();
});

gulp.task('@sass', function (done) {
	gulp.watch(path.styles.src, gulp.parallel(['sass']));

	done();
});
