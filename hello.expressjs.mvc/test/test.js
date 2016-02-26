/*
 * Prototype of Unit tests..
 */

var request = require('supertest');
var should = require("should");

var express = require('express'), 
	app = require('./../app')(express);

describe('loading express', function () {
  var server;
  beforeEach(function () {
    app.startServer(function(){
    	console.log('Strarted for tests!');
    });
  });
  afterEach(function () {
  	app.stopServer();
  });
  it('responds to /', function testSlash(done) {
  request(app.getServer())
    .get('/')
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(app.getServer())
      .get('/foo/bar')
      .expect(404, done);
  });
});