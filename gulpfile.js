const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

gulp.task('js', () => {
  return gulp.src('./dev/scripts/main.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('./public/scripts'));
});

gulp.task('styles', ()=>{
  return gulp.src('./dev/styles/style.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/styles'))
});

gulp.task('watch', () => {
  gulp.watch('./dev/styles/**/*.scss', ['styles']);
  gulp.watch('./dev/scripts/main.js',['js']);
});

gulp.task('default',['styles','js','watch']);