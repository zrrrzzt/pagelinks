'use strict';

var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var validUrl = require('valid-url');

function parseDataForLinks(opts, callback){
  var $ = cheerio.load(opts.data);
  var attrs = opts.attrs || ['href', 'id', 'target', 'class'];
  var links = [];

  $('a').each(function(index, element){
    var e = $(element);
    var props = {};

    props.text = e.text();

    attrs.forEach(function(el){
      if(e.attr(el)){
        props[el] = e.attr(el);
      }
    });

    links.push(props);
  });

  return callback(null, links);
}

module.exports = function getPageLinks(opts, callback){

  if(!opts.uri && !opts.file && !opts.data){
    return callback(new Error('Missing required param'), null);
  }

  if(opts.uri && !validUrl.isWebUri(opts.uri)){
    return callback(new Error('Invalid uri'), null);
  }

  var newOpts = {
      data : false,
      attrs: opts.attrs
    }
    ;

  if(opts.uri){
    request(opts.uri, function(error, response, body){
      if(error){
        return callback(error, null);
      }

      newOpts.data = body.toString()
        ;

      parseDataForLinks(newOpts, function(err, links){
        if(err){
          return callback(err, null);
        }

        return callback(null, links);

      });

    });
  }

  if(opts.file){
    fs.readFile(opts.file, function(err, data){
      if(err){
        return callback(err, null);
      }

      newOpts.data = data.toString();

      parseDataForLinks(newOpts, function(err, links){
        if(err){
          return callback(err, null);
        }

        return callback(null, links);

      });

    });
  }

  if(opts.data){

    newOpts.data = opts.data;

    parseDataForLinks(newOpts, function(err, links){
      if(err){
        return callback(err, null);
          }

      return callback(null, links);

    });
  }

};