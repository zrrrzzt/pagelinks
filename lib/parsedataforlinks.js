'use strict';

var cheerio = require('cheerio');

/**
 *parseDataForLinks
 *
 * @desc parses data for links and returns array with objects
 *
 * @param {object} options - Options object
 * @param {string} options.data - Data to parse
 * @param {array} options.attrs - attributes to get values from
 * @param {callback} callback - Callback for handling the response
 * @returns {*}
 */
function parseDataForLinks(options, callback){
  var $ = cheerio.load(options.data);
  var attrs = options.attrs || ['href', 'id', 'target', 'class'];
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