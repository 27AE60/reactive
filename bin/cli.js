#!/usr/bin/env node
'use strict';
var meow = require('meow');
var pkg = require('../package.json');

var cli = meow({
  help: false,
  pkg: pkg
});

var opts = cli.flags;
var args = cli.input;
var cmd = args[0];

var lib= require('../lib/index.js')(opts, args, cmd);
