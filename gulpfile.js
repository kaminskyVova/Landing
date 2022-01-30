const { src, dest } = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass')(require('sass'));


function defaultTask(cb) {
  return src('./app/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./app/css/'))

}
exports.default = defaultTask
function buildStyles() {
  return gulp
    .src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css/'));
}

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
};

// Watch
gulp.task('watch', function () {
  gulp
    .watch(['./app/*.html', './app/script/**/*.js'])
    .on('change', gulp.parallel(browserSync.reload));
});

// Static server
gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: './app',
    },
  });
});

// Default task
gulp.task('default', gulp.parallel('server', 'watch'));
