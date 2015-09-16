/* Usage information. */
'use strict';
var fs = require('fs');
var path = require('path');

module.exports = function(route, options) {
  console.log(fs.readFileSync(path.resolve(__dirname, '../usage.txt'), 'utf8'));
};
