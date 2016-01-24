var gulp = require('gulp');
var gutil = require('gulp-util'); // used for debugging
var source = require('vinyl-source-stream');
var browserify = require('browserify'); // used to include json
var watchify = require('watchify'); // automatically re-run gulpfile
var reactify = require('reactify'); // jsx to js

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));
  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  build();
  bundler.on('update', build);
});
