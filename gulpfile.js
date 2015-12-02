var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    jshint = require('gulp-jshint');

gulp.task('dist-src-js', function () {
    gulp.src('src/**/*.js')
        .pipe(plumber()).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('dist'));
});

gulp.task('test-bower', function () {
    gulp.src('bower_components/jquery/dist/jquery.min.js')
        .pipe(plumber()).pipe(gulp.dest('test/lib/jquery/'));

    gulp.src('bower_components/json2/**/*.js')
        .pipe(plumber()).pipe(gulp.dest('dist/lib/json2/'));
});

gulp.task('src-jshint', function () {
    gulp.src('src/**.js')
        .pipe(plumber())
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
});

gulp.task('default', ['src-jshint', 'dist-src-js'], function () {
});

gulp.task('test', ['default', 'test-bower'], function () {
});

gulp.task('watch', ['default'], function () {
    gulp.watch('src/**/*.js', ['dist-src-js']);
});