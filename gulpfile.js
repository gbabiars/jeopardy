var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    Hapi = require('hapi'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    path = require('path');

gulp.task('html', function() {
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./tmp'));
});

gulp.task('scripts', function() {
    var bundler = browserify({
        cache: {},
        packagedCache: {},
        fullPaths: true,
        entries: ['./app/index.js'],
        debug: true
    });
    bundler.transform(reactify);

    function rebundle() {
        console.log('Bundling scripts');
        return bundler
            .bundle()
            .on('error', function(e) {
                gutil.log('Browserify error', e);
            })
            .pipe(source('./app.js'))
            .pipe(gulp.dest('./tmp'));
    }

    bundler = watchify(bundler);
    bundler.on('update', rebundle);

    return rebundle();
});

gulp.task('libs', function() {
    var src = [
        'bower_components/firebase/firebase-debug.js'
    ];
    gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(concat('libs.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('tmp'));
});

gulp.task('server', function() {
    var server = new Hapi.Server();
    server.connection({ port: 8000 });
    server.route({
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: path.join(__dirname, '/tmp')
            }
        }
    });

    server.start(function() {
        console.log('Dev server started', server.info.uri);
    });
});

gulp.task('default', ['libs', 'scripts', 'html', 'server']);
