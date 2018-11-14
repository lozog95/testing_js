var numbers = require('../numbers.js');
var assert = require('assert');

describe('Simple tests on Numbers', function () {
 it('should return addition result correctly add(2,3) == 5', function () {
        assert.equal(numbers.add(2,3), 5);
    });
 it('should return addition result correctly add(-10,-17) == -27', function () {
        assert.equal(numbers.add(-10,-17), -27);
    });
});
