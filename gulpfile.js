var gulp = require('gulp'),
    sass = require('gulp-sass')

var config = {
    bootstrapDir: './node_modules/bootstrap-sass',
    publicDir: './dist',
};

gulp.task('css', function() {
  gulp.src("scss/bootstrap.scss")
  .pipe(sass({outputStyle:'compressed'}))
  .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('js', function() {
  gulp.src(config.bootstrapDir + '/assets/javascripts/bootstrap.min.js')
  .pipe(gulp.dest(config.publicDir + '/js'))
})

gulp.task('default', ['css', 'js', 'fonts']);
