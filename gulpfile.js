var gulp = require('gulp');
var gulpJade = require('gulp-jade');
var less = require('gulp-less');
var path = require('path');

var jade = require('jade');
var del = require('del');

gulp.task('clean-up', function(){
	return del(['lib/**/*']);
});

gulp.task('copy-views',['clean-up'], function(){
	return gulp.src(['views/**/*']).pipe(gulp.dest('lib/views'));
});

gulp.task('copy-images',['clean-up'], function(){
	return gulp.src(['public/images/**/*']).pipe(gulp.dest('lib/public/images'));
});

gulp.task('copy-js',['clean-up'], function(){
	return gulp.src(['public/js/**/*']).pipe(gulp.dest('lib/public/js'));
});


gulp.task('less', ['clean-up'], function () {
  return gulp.src('./public/css/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, './public/css', 'includes') ]
    }))
    .pipe(gulp.dest('./lib/public/css'));
});

// gulp.task('compile-views',['clean-up'], function(){
// 	return gulp.src(['views/**/*.jade'])
// 				.pipe(gulpJade({
// 					jade: jade,
// 					pretty: true
// 				}))
// 				.pipe(gulp.dest('lib/views'));
// });


gulp.task('default', ['copy-views', 'copy-images', 'copy-js', 'less']);
