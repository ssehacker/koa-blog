var gulp = require('gulp');
var gulpJade = require('gulp-jade');
var jade = require('jade');
var del = require('del');

gulp.task('clean-up', function(){
	return del(['lib/**/*']);
});

gulp.task('compile-views',['clean-up'], function(){
	return gulp.src(['views/**/*']).pipe(gulp.dest('lib/views'));
});

// gulp.task('compile-views',['clean-up'], function(){
// 	return gulp.src(['views/**/*.jade'])
// 				.pipe(gulpJade({
// 					jade: jade,
// 					pretty: true
// 				}))
// 				.pipe(gulp.dest('lib/views'));
// });


gulp.task('default', ['compile-views']);
