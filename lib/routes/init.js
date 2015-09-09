/* Scaffold app/component structure. */
'use strict';

var _ = require('lodash'),
  path = require('path');

var config = require('../tasks/config')(),
  scaffold = require('../tasks/scaffold');

var cwd = process.cwd();

module.exports = function(route, options) {
  if (!_.isEmpty(options.opts)) {
    if (_.keys(options.opts).length !== 1 || !options.opts.component) {
      throw new Error('invaid option');
    }

    var optValue = options.opts.component;
    if (_.isString(optValue)) {
      scaffold.component({
        name: '',
        path: '',
        tplSrc: '',
        data: {}
      });
      return;
    }
    if (_.isArray(optValue)) {
      _.forEach(_.uniq(optValue), function(n) {
        scaffold.component({
          name: '',
          path: '',
          tplSrc: '',
          data: {}
        });
      });
      return;
    }

    throw new Error('invaid argument to option');
  }

  console.log('basic init');
};
