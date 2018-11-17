var assert = require('assert');

var chai_assert = require('chai').assert;
require('chai').should();
var chai_expect = require('chai').expect;

describe('Simple tests on String', function () {

  it('should return number of charachters in a string \t"Hello" -> 5 chars using core assert equal', function () {
    assert.equal("Hello".length, 5);
  });

  it('should return number of charachters in a string \t"Hello" -> 5 chars using chai assert lenghtOf', function () {
    chai_assert.lengthOf("Hello", 5, ' "Hello" should has a length of 5');
  });

  it('should return number of charachters in a string \t"Hello" -> 5 chars using chai expect lenghtOf', function () {
    chai_expect("Hello").to.have.lengthOf(5, ' "Hello" should has a length of 5');
  });

  it('should return number of charachters in a string \t"Hello" -> 5 chars using chai should lenghtOf', function () {
    "Hello".should.have.lengthOf(5, ' "Hello" should has a length of 5');
  });

  it('should return first charachter of the string \t"Hello" -> \'H\'', function () {
    assert.equal("Hello".charAt(0), 'H');
  });

});
