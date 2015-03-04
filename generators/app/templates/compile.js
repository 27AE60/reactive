'use strict';

var gulp = require('gulp'),
  jade = require('gulp-jade'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  browserify = require('gulp-browserify'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  inject = require('gulp-inject'),
  util = require('./util.js');

module.exports = {
  scss: function(paths) {
    return gulp.src(paths.sources)
      .pipe(sass())
      .pipe(connect.reload())
      .pipe(gulp.dest(paths.destination));
  },

  jade: function(paths) {
    return gulp.src(paths.source)
      .pipe(inject(
        gulp.src(paths.inject, {read: false}, {relative: true}),
        {
          ignorePath: paths.ignore,
          addRootSlash: false
        }
      ))
      .pipe(jade({
        locals: {},
        pretty: true
      }))
      .pipe(connect.reload())
      .pipe(gulp.dest(paths.destination));
  },

  jsx: function(paths, _component) {
    return gulp.src(paths.source)
      .pipe(browserify({
        transform: 'reactify'
      }))
      .pipe(concat(_component + '.js'))
      .pipe(connect.reload())
      .pipe(gulp.dest(paths.destination));
  }
};
