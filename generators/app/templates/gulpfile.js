'use strict';

var gulp = require('gulp'),
  gulpCommand = require('gulp-command')(gulp);

var Component = new(require('./.reactive/component.js'));

gulp
  .option('component', '-a, --add ', 'New Component')
  .option('component', '-r, --remove', 'Delete Component')
  .option('component', '-i, --info', 'Component Information')
  .option('component', '-w, --watch', 'Watch Component Development')
  .option('component', '-t, --test', 'Run tests for the Component')
  .option('component', '-c, --coverage', 'Run code coverage')
  .task('component', function() {
    if (this.flags.add) {
      return Component.add(this.flags.add);
    } else if (this.flags.remove) {
      return Component.remove(this.flags.remove);
    } else if (this.flags.info) {
      return Component.info(this.flags.info);
    } else if (this.flags.watch) {
      return Component.watch(this.flags.watch);
    } else if (this.flags.test) {
      return Component.test(this.flags.test);
    } else if (this.flags.coverage) {
      return Component.coverage(this.flags.test);
    }
  });

gulp
  .task('watch', function() {
    console.log('watch');
  })
  .task('build', function() {
    console.log('build');
  })
  .task('test', function() {
    console.log('test');
  });
