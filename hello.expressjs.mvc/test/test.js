var assert = require('assert');
describe('loading express', function () {
  it('done(1);', function testSlash() {
  	 assert.equal('Hello, world!', 'Hello, world!', 'Message must match');
  });
  	
  it('done(2);', function testPath(done) {
  	assert.equal('Hello, world!', 'Hello, world!', 'Message must match');
  	done();
  });
});