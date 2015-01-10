'use strict';

var cheerio = require('cheerio');

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

module.exports = parseDataForLinks;