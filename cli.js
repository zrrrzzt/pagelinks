#!/usr/bin/env node
'use strict';

var pagelinks = require('./index')
  , pkg = require('./package.json')
  , query = process.argv[2]
  , argv = require('minimist')((process.argv.slice(2)))
  , opts = {
      uri: false,
      file: false,
      data: false,
      attrs: false
    }
  ;

function printHelp() {
  console.log(pkg.description);
  console.log('');
  console.log('Usage:');
  console.log('  $ pagelinks <uri>');
  console.log('');
  console.log('or:');
  console.log('  $ pagelinks --file=<file>');
  console.log('');
  console.log('or:');
  console.log('  $ pagelinks --data=<data>');
  console.log('');
  console.log('Default the module will return text, href, id, target and class from the links.');
  console.log('For other attributes/properties supply a comma separated string of attributes.');
  console.log('  $ pagelinks <uri> --attrs="href,data-title,data-description"');
}

if (!query || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  printHelp();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

if (query.indexOf('http') !== -1) {
  opts.uri = argv._[0];
}

if(argv.file){
  opts.file = argv.file;
}

if(argv.data){
  opts.data = argv.data;
}

if(argv.attrs){
  opts.attrs = argv.attrs.split(',');
}

pagelinks(opts, function(err, links){
  if(err){
    console.error(err);
  }
  console.log(JSON.stringify(links));
});