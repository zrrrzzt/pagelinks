'use strict';

var assert = require('assert');
var fs = require('fs');
var pagelinks = require('../index');

describe('pagelinks - output data', function(){

  it('Should return 3 links', function(done){

    fs.readFile('test/testpage.html', function(err, data){

      if (err) {
        throw err;
      }

      var opts = {
        data : data.toString()
      };

      pagelinks(opts, function(err, links){
        if(err){
          throw err;
        }

        assert.equal(links.length, 3);

        done();

      });

    });

  });


  it('Should return href', function(done){

    fs.readFile('test/testpage.html', function(err, data) {

      if (err) {
        throw err;
      }

      var opts = {
        data: data.toString()
      };

      pagelinks(opts, function (err, links) {
        if (err) {
          throw err;
        }

        assert.equal(links[0].href, 'https://github.com/zrrrzzt');

        assert.equal(links[1].href, '127.0.0.1');

        assert.equal(links[2].href, 'https://www.npmjs.org');

        done();

      });

    });

  });

  it('Should return data-gingerbread', function(done){

    fs.readFile('test/testpage.html', function(err, data) {

      if (err) {
        throw err;
      }

      var opts = {
        data: data.toString(),
        attrs: ['data-gingerbread']
      };

      pagelinks(opts, function (err, links) {
        if (err) {
          throw err;
        }

        assert.equal(links[0]['data-gingerbread'], 'bevare of fakes');

        done();

      });

    });

  });

});