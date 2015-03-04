'use strict';

var net = require('net'),
  path = require('path'),
  gutil = require('gulp-util'),
  fs = require('fs'),
  map = require('map-stream');

// Get free port
var getPort = exports.getPort = function(port, cb) {
  var server = net.createServer();
  server.listen(port, function(err) {
    server.once('close', function() {
      cb(port);
    });
    server.close();
  });
  server.on('error', function(err) {
    getPort(port + 1, cb);
  });
};

// Recursive directory remove
var rmdir = exports.rmdir = function(dir) {
  var list = fs.readdirSync(dir);
  for (var i = 0; i < list.length; i++) {
    var filename = path.join(dir, list[i]);
    var stat = fs.statSync(filename);

    if (filename == '.' || filename == '..') {
      // pass these files
    } else if (stat.isDirectory()) {
      // rmdir recursively
      rmdir(filename);
    } else {
      // rm fiilename
      fs.unlinkSync(filename);
    }
  }
  fs.rmdirSync(dir);
};

var using = exports.using = function() {
  return map(function(file, cb) {
    gutil.log('Watching ' + gutil.colors.green(file.path.replace(file.cwd + '/', '')));
    cb(null, file);
  });
}
