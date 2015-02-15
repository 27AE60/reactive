'use strict';

var gulp = require('gulp'),
  jade = require('gulp-jade'),
  concat = require('gulp-concat'),
  browserify = require('gulp-browserify'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass');

module.exports = {
  sass: function(paths) {
    return gulp.src(paths.sources)
      .pipe(sass())
      .pipe(concat('build.css'))
      .pipe(gulp.dest(paths.destination));
  },

  jade: function(paths) {
    return gulp.src(paths.source)
      .pipe(jade({
        locals: {},
        pretty: true
      }))
      .pipe(gulp.dest(paths.destination));
  },

  jsx: function(paths, _component) {
    return gulp.src(paths.source)
      .pipe(browserify({
        transform: 'reactify'
      }))
      .pipe(concat(_component + '.js'))
      .pipe(gulp.dest(paths.destination));
  }
};
