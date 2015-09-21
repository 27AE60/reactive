/* Functions to scaffold app/component */
'use strict';

var mkdirp = require('mkdirp'),
  fs = require('fs'),
  path = require('path'),
  _ = require('lodash');

var utils = require('../utils.js');

exports.component = function(params) {
  var files = [];
  try {
    files = fs.readdirSync(params.dstDir)
  } catch (e) {
    if (e.code === 'ENOENT') {
      mkdirp.sync(params.dstDir);
    } else {
      throw new Error(e);
    }
  }
  if (files.length !== 0) {
    throw new Error('component already exists');
  }

  if (params.data) {
    params.data.name = params.name;
  } else {
    params.data = {
      name: params.name
    };
  }

  utils.treeSync(params.tplDir).forEach(function(src) {
    var relativeSrc = path.dirname(path.relative(params.tplDir, src));

    mkdirp.sync(path.join(params.dstDir, relativeSrc));

    fs.writeFileSync(path.join(params.dstDir, relativeSrc, path.basename(src, '.tpl')),
      _.template(fs.readFileSync(src, 'utf8'))(params.data));
  });
};

exports.app = function(params) {};
