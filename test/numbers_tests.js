var numbers = require('../numbers.js');
var assert = require('assert');

var chai_assert = require('chai').assert;
require('chai').should();
var chai_expect = require('chai').expect;

describe('Simple tests on numbers module', function () {
  it('should return addition result correctly add(2,3) == 5 using core assert', function () {
    assert.equal(numbers.add(2,3), 5);
  });

  it('should return addition result correctly add(2,3) == 5 using chai assert', function () {
    chai_assert.equal(numbers.add(2,3), 5);
  });

  it('should return addition result correctly add(2,3) == 5 using chai expect', function () {
    chai_expect(numbers.add(2,3)).to.equal(5);
  });

  it('should return addition result correctly add(2,3) == 5 using chai should', function () {
    numbers.add(2,3).should.equal(5);
  });
  
  it('should return addition result correctly add(2,-5) == -3 using chai should', function () {
    numbers.add(2,-5).should.equal(-3);
  });

  it('should return addition result correctly sub(-10,-17) == 7 using core assert', function () {
    assert.equal(numbers.sub(-10,-17), 7);
  });

  it('should return addition result correctly sub(-10,-17) == 7 using chai assert', function () {
    chai_assert.equal(numbers.sub(-10,-17), 7);
  });

  it('should return addition result correctly sub(-10,-17) == 7 using chai expect', function () {
    chai_expect(numbers.sub(-10,-17)).to.equal(7);
  });

  it('should return addition result correctly sub(-10,-17) == 7 using chai should', function () {
    numbers.sub(-10,-17).should.equal(7);
  });

});
