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
  var routePath = path.join(__dirname, "routes/**/*.js");

  glob(routePath, {
    nodir: true
  }, function(err, files) {
    if (err) cb(err);

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
      try {
        return router.navigate(cmd, {
          opts: opts,
          args: args
        });
      } catch (e) {
        console.log('\n>> ' + e.toString() + ' :(\n');
      }
    }

    /* show usage instead */
    return router.navigate('help', {});
  });
};
