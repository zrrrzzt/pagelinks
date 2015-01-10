'use strict';

var getPageData = require('./lib/getpagedata');
var parseDataForLinks = require('./lib/parsedataforlinks');

function parseAndReturn(options, callback){
  parseDataForLinks(options, function(err, links){
    if (err) {
      return callback(err, null);
    } else {
      return callback(null, links);
    }
  });
}

function getPageLinks(options, callback){
  var newOpts = {
    attrs: options.attrs
  };

  getPageData(options, function(err, data){
    if (err) {
      return callback(err, null);
    } else {
      newOpts.data = data;
      parseAndReturn(newOpts, callback);
    }
  });
}

module.exports = getPageLinks;