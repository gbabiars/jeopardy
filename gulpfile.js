var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    Hapi = require('hapi'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    path = require('path');

gulp.task('html', function() {
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./tmp'));
});
