var assert = require('assert');

var chai_assert = require('chai').assert;
require('chai').should();
var chai_expect = require('chai').expect;

var abc = 'abc';

describe('Simple tests to determine differences', function () {

  // The TDD style is assert
  it('test if abc variable is a string using core assert', function () {
    assert.ok(typeof abc === 'string');
  });

  it('test if abc variable is a string using chai assert', function () {
    chai_assert.typeOf(abc, 'string')
  });

  // The BDD styles are expect and should.
  // Both use the same chainable language to construct assertions,
  //but they differ in the way an assertion is initially constructed

  // The expect interface does not modify Object.prototype, whereas should does
  it('test if abc variable is a string using chai should', function () {
    abc.should.be.a('string');
  });

  it('test if abc variable is a string using chai expect', function () {
    chai_expect(abc).to.be.a('string');
  });

});
