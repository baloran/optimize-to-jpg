const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const gm = require('gulp-gm');

gulp.task('default', () => {
    gulp.src('./img/*.jpg')
        .pipe(imagemin([imagemin.jpegtran()]))
        .pipe(gulp.dest('dist/'));

    gulp.src('./img/*.png')
      .pipe(gm(function (gmfile) {
        return gmfile.flatten().setFormat('jpg');
      }))
      .pipe(imagemin([imagemin.jpegtran()]))
      .pipe(gulp.dest('dist/'));
});
