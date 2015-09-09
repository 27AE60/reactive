/* Function to find and load app config */
'use strict';

var fs = require('fs'),
  path = require('path');

var cwd = process.cwd();

module.exports = function() {
  var configPath = path.join(cwd, 'config.json');
  try {
    fs.statSync(configPath);
  } catch (e) {
    configPath = path.join(__dirname, '../config.json');
  }

  var raw = fs.readFileSync(configPath, 'utf8');
  var conf = JSON.parse(raw);

  return conf;
};
