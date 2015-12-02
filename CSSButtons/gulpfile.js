var gulp = require('gulp'),
    watch = require('gulp-watch');

var livereload = require('gulp-livereload'),
    plumber = require('gulp-plumber');

var less = require('gulp-less'),
    minCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');


var paths = {
    less: ['./public/stylesheets/src/**/*.less']
};

var watcherLess;


gulp.task('styles', function() {
    var stream = gulp.src(paths.less)
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./public/stylesheets/dest'))
        .pipe(minCSS())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./public/stylesheets/dest'))
        .pipe(livereload());

    return stream;
});

gulp.task('default', ['styles'], function() {
    livereload.listen();
    watcherLess = gulp.watch(paths.less, ['styles']);
    watcherLess.on('change', function(event) {
        console.log('File' + event.path + ' was ' + event.type + ', task running...');
    });
});
