var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');

gulp.task('dist-src-js', function () {
    gulp.src('src/**/*.js').pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('dist'));
});

gulp.task('test-bower', function () {
    gulp.src('bower_components/jquery/dist/jquery.min.js').pipe(gulp.dest('test/lib/jquery/'));

    gulp.src('bower_components/json2/**/*.js').pipe(gulp.dest('dist/lib/json2/'));
});

gulp.task('default', ['dist-src-js'], function () {
});

gulp.task('test', ['default', 'test-bower'], function () {
});

gulp.task('watch', ['default'], function () {
    gulp.watch('src/**/*.js', ['dist-src-js']);
});