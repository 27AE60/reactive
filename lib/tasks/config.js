/* Function to find and load app config */
'use strict';

var fs = require('fs'),
  path = require('path');

var cwd = process.cwd();

module.exports = function() {
  var localConfig = {};
  var globalConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../config.json'), 'utf8'));
  try {
    localConfig = JSON.parse(fs.readFileSync(path.join(cwd, 'config.json'), 'utf8'));
  } catch (e) {}

  globalConfig['__basepath'] = path.join(__dirname, '..');
  localConfig['__basepath'] = cwd;

  return {
    global: globalConfig,
    local: localConfig
  };
};
