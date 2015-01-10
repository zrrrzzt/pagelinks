'use strict';

var assert = require('assert');
var pagelinks = require('../index');

describe('pagelinks - inputs', function(){

  it('Should throw if uri or file or data is not specified', function(done){

    var opts = {
        uri:false,
        file:false,
        data:false
    };

    pagelinks(opts, function(err, data){
      assert.throws(function(){
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if ((err instanceof Error) && /Missing required param/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('Should throw if uri is not valid', function(done){

    var opts = {
          uri:'pysje'
    };

    pagelinks(opts, function(err, data){
      assert.throws(function(){
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if ((err instanceof Error) && /Invalid uri/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

});