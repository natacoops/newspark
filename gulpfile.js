var gulp = require('gulp');
var p = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var livereload = require('gulp-livereload');
var reload = browserSync.reload;

gulp.task('styles',function() {
  gulp.src('css/style.scss')
    .pipe(p.plumber())
    .pipe(p.sourcemaps.init())
    .pipe(p.sass())
    .pipe(p.autoprefixer())
    .pipe(p.sourcemaps.write('.'))
    .pipe(gulp.dest('./css'))
    .pipe(livereload())
    .pipe(reload({stream:true}))
});

gulp.task('watch',function() {
  p.livereload.listen();
  gulp.watch('./css/*.scss', ['styles']);
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "."
        }
    });
});


gulp.task('default',['styles', 'browser-sync', 'watch']);



