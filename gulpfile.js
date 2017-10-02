var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('css', function(){
  return gulp.src('dev/*.less')
    .pipe(less())
    .pipe(gulp.dest('src'))
});

gulp.task('default', [ 'css' ]);

gulp.watch('dev/*.less', ['css']);