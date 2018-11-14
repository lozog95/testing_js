var assert = require('assert');

describe('Simple tests on String', function () {
 it('should return number of charachters in a string \t"Hello" -> 5 chars', function () {
        assert.equal("Hello".length, 5);
    });

 it('should return first charachter of the string \t"Hello" -> \'H\'', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
});
