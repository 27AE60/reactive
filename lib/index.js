'use strict';
var glob = require('glob');
var path = require('path');
var Router = require('./router.js');
var router = new Router();

/**
 * Associate handlers with commands.
 * @param {Function} cb callback
 */
function getHandlers(cb) {
  glob("../lib/routes/**/*.js", {nodir: true}, function(err, files) {
    if(err) cb(err);

    files = files.map(function(match) {
      var filename = path.basename(match, '.js');
      /* register routes */
      router.register(filename, require(match));
    });

    cb();
  });
};

module.exports = function(opts, args, cmd) {
  getHandlers(function(err) {
    if (err) throw err;

    if (cmd) {
      return router.navigate(cmd, {opts: opts, args: args});
    }

    /* show usage instead */
    return router.navigate('help', {});
  });
};
