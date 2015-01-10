'use strict';

var fs = require('fs');
var request = require('request');
var validUrl = require('valid-url');

function getPageData(opts, callback){

  if (!opts.uri && !opts.file && !opts.data) {
    return callback(new Error('Missing required param'), null);
  }

  if (opts.uri && !validUrl.isWebUri(opts.uri)) {
    return callback(new Error('Invalid uri'), null);
  }

  if (opts.uri) {
    request(opts.uri, function(error, response, body){
      if (error) {
        return callback(error, null);
      } else {
        return callback(null, body.toString());
      }

    });
  }

  if (opts.file) {
    fs.readFile(opts.file, function(err, data){
      if (err) {
        return callback(err, null);
      } else {
        return callback(null, data.toString());
      }
    });
  }

  if (opts.data) {
    return callback(null, opts.data);
  }

}

module.exports = getPageData;