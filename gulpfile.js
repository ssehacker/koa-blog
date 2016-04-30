var gulp = require('gulp');
var gulpJade = require('gulp-jade');
var jade = require('jade');
var del = require('del');

gulp.task('clean-up', function(){
	return del(['lib/**/*']);
});

gulp.task('copy-views',['clean-up'], function(){
	return gulp.src(['views/**/*']).pipe(gulp.dest('lib/views'));
});

gulp.task('copy-static',['clean-up'], function(){
	return gulp.src(['public/**/*']).pipe(gulp.dest('lib/public'));
});


// gulp.task('compile-views',['clean-up'], function(){
// 	return gulp.src(['views/**/*.jade'])
// 				.pipe(gulpJade({
// 					jade: jade,
// 					pretty: true
// 				}))
// 				.pipe(gulp.dest('lib/views'));
// });


gulp.task('default', ['copy-views', 'copy-static']);
