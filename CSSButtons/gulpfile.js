var gulp = require('gulp');
var watch = require('gulp-watch');

var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');

var less = require('gulp-less');
var minifycss= require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');


var paths = {
    less: ['./public/stylesheets/src/**/*.less'],
    html: ['./views/**/*.html']
};

var watcherLess;
var watcherHtml;

gulp.task('html', function() {
    var stream = gulp.src(paths.html)
        .pipe(livereload());

    return stream;
});

gulp.task('styles', function() {
    var stream = gulp.src(paths.less)
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['> 5% in CN', 'last 2 versions']
        }))
        .pipe(gulp.dest('./public/stylesheets/dest'))
        .pipe(minifycss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./public/stylesheets/dest'))
        .pipe(livereload());

    return stream;
});


gulp.task('default', ['html', 'styles'], function() {
    livereload.listen();

    watcherLess = gulp.watch(paths.less, ['styles']);
    watcherLess.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running task...');
    });

    watcherHtml = gulp.watch(paths.html, ['html']);
    watcherHtml.on('change', function(event) {
        console.log('File ' + event.path + ' was ' +  event.type + ', running task...');
    });
});
