var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    hbs  = require('gulp-compile-handlebars');

var config = {
    bootstrapDir: './node_modules/bootstrap-sass',
    publicDir: './dist',
};

gulp.task('css', function() {
  gulp.src("scss/bootstrap.scss")
  .pipe(sass({outputStyle:'compressed'}))
	.pipe(rename('bootstrap.min.css'))
  .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('js', function() {
  gulp.src(config.bootstrapDir + '/assets/javascripts/bootstrap.min.js')
  .pipe(gulp.dest(config.publicDir + '/js'))
});

gulp.task('view', function() {
    var options = {
      batch : ['./view/module']
    }

    return gulp.src('view/main.hbs')
      .pipe(hbs('', options))
      .pipe(rename('main.html'))
      .pipe(gulp.dest('html'));
});

gulp.task('default', ['css', 'js', 'fonts', 'view']);
