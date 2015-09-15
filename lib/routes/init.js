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
      var name = optValue.replace(/\/$/, '').replace(/^\//, '').split('/').join('-');
      scaffold.component({
        name: name,
        dstDir: path.join(config.local['__basepath'], config.local.component.dir, name),
        tplDir: path.join(config.global['__basepath'], config.global.component.tplDir)
      });
      return;
    }
    if (_.isArray(optValue)) {
      _.forEach(_.uniq(optValue), function(val) {
        var name = value.replace(/\/$/, '').replace(/^\//, '').split('/').join('-');
        scaffold.component({
          name: name,
          dstDir: path.join(config.local['__basepath'], config.local.component.dir, name),
          tplDir: path.join(config.global['__basepath'], config.global.component.tplDir)
        });
      });
      return;
    }

    throw new Error('invaid argument to option');
  }

  console.log('basic init');
};
