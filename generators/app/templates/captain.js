'use strict';

var path = require('path'),
  fs = require('fs'),
  gulp = require('gulp'),
  compile = require('./compile.js'),
  util = require('./util.js'),
  connect = require('gulp-connect'),
  gutil = require('gulp-util'),
  lodash = require('lodash'),
  config = require('../app.json');

var baseDir = path.resolve(__dirname, '../'),
  appDir = path.join(baseDir, 'src'),
  tempDir = path.join(baseDir, '/.tmp', 'app');

var Captain = function() {};

Captain.prototype.watch = function() {
  try {
    fs.mkdirSync(path.join(baseDir + '/.tmp'));
  } catch (e) {
    if (e.code != 'EEXIST') {
      gutil.log(gutil.colors.red('App watch failed.', e));
      return;
    }
  }

  try {
    util.rmdir(tempDir);
  } catch (e) {
    if (e.code != 'ENOENT') {
      gutil.log(gutil.colors.red('App watch failed.', e));
      return;
    }
  }

  try {
    fs.mkdirSync(tempDir);
    fs.mkdirSync(path.join(tempDir, 'css'));
    fs.mkdirSync(path.join(tempDir, 'scripts'));
  } catch (e) {
    if (e.code != 'EEXIST') {
      gutil.log(gutil.colors.red('App watch failed.', e));
      return;
    }
  }

  var _appCss = lodash.map(config.dependencies['s-css'], function(dep) {
    return path.join(appDir, dep, '/*.scss');
  });

  var _componentCss = lodash.map(config.dependencies.components, function(dep) {
    return path.join(appDir, 'components', dep, 'src/*.scss');
  });

  var _cssDeps = _appCss.concat(_componentCss);

  gulp.task('compile-scss', function() {
    return compile.scss({
      sources: _cssDeps,
      destination: path.join(tempDir, 'css'),
    });
  });

  /* Note: Here we compile only trigger.jsx because trigger is only used for
   * development phase which actually includes the component */
  gulp.task('compile-jsx', function() {
    return compile.jsx({
      source: path.join(appDir, 'boot.jsx'),
      destination: path.join(tempDir, 'scripts')
    }, 'app');
  });

  gulp.task('compile-jade', ['compile-scss'], function() {
    return compile.jade({
      ignore: '.tmp/app',
      inject: path.join(tempDir, 'css', '/*.css'),
      source: path.join(appDir, 'index.jade'),
      destination: tempDir
    });
  });

  gulp.task('connect', function() {
    util.getPort(9000, function(port) {
      connect.server({
        root: tempDir,
        port: port,
        livereload: true
      });
      gutil.log(gutil.colors.green('Watching app for changes.'));
    });
  });

  gulp.task('watch', function() {
    // Watch current component jade
    gulp.watch([path.join(appDir, '/*.jade')], ['compile-jade']);

    // Watch app & component scss
    gulp.watch(_cssDeps, ['compile-scss', 'compile-jade']);

    // Watch app & component jsx
  });

  gulp.start('compile-scss', 'compile-jade', 'compile-jsx', 'watch', 'connect');
};

Captain.prototype.build = function() {};

Captain.prototype.test = function() {};

module.exports = Captain;
