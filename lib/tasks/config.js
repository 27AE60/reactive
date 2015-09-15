/* Function to find and load app config */
'use strict';

var fs = require('fs'),
  path = require('path');

var cwd = process.cwd();

module.exports = function() {
  var globalConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../config.json'), 'utf8'));
  var localConfig = JSON.parse(fs.readFileSync(path.join(cwd, 'config.json'), 'utf8'));

  globalConfig['__basepath'] = path.join(__dirname, '..');
  localConfig['__basepath'] = cwd;

  return {
    global: globalConfig,
    local: localConfig
  };
};
