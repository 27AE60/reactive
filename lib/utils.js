'use strict';

var fs = require('fs'),
  path = require('path'),
  _ = require('lodash');

var treeSync = exports.treeSync = function(src) {
  var stat = fs.statSync(src);
  var files = [];
  if (stat.isDirectory()) {
    fs.readdirSync(src).forEach(function(name) {
      files = files.concat(treeSync(path.join(src, name)));
    });
  } else {
    files.push(src);
  }

  return files;
};
