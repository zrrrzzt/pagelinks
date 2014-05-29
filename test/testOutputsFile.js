'use strict';

var assert = require('assert')
  , pagelinks = require('../index')
  ;

describe('pagelinks - output file', function(){

  it('Should return 3 links', function(done){

    var opts = {
          file : 'test/testpage.html'
        }
      ;

    pagelinks(opts, function(err, links){
      if(err){
        throw err;
      }

      assert.equal(links.length, 3);

      done();

    })

  });

  it('Should return href', function(done){

    var opts = {
        file : 'test/testpage.html'
      }
      ;

    pagelinks(opts, function(err, links){
      if(err){
        throw err;
      }

      assert.equal(links[0].href, 'https://github.com/zrrrzzt');

      assert.equal(links[1].href, '127.0.0.1');

      assert.equal(links[2].href, 'https://www.npmjs.org');

      done();

    })

  });

  it('Should return data-gingerbread', function(done){

    var opts = {
        file : 'test/testpage.html',
        attrs:['data-gingerbread']
      }
      ;

    pagelinks(opts, function(err, links){
      if(err){
        throw err;
      }

      assert.equal(links[0]['data-gingerbread'], 'bevare of fakes');

      done();

    })

  });

});