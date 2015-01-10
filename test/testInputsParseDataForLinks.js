'use strict';

var assert = require('assert');
var parseDataForLinks = require('../lib/parsedataforlinks');

describe('parseDataForLinks - inputs', function(){

  it('requires an options object', function(done){

    var options = false;

    parseDataForLinks(options, function(err, data){
      assert.throws(function(){
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if ((err instanceof Error) && /Missing required input: options/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('requires options.data to exist', function(done){

    var options = {
      data: false
    };

    parseDataForLinks(options, function(err, data){
      assert.throws(function(){
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if ((err instanceof Error) && /Missing required input: options.data/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

});