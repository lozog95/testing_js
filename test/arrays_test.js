var assert = require('assert');
let array = [1,2,3]

before(function() {
	array.push(2)
	console.log(array)
});

describe('Simple tests on Arrays', function () {
 it('should have length: 4 \t"array" -> [1,2,3]', function () {
        assert.equal(array.length,4) 
    });
});
