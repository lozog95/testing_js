var api = require('../api_calls.js');
var assert = require('assert');

describe('Simple tests on API calls', function () {
 it('should return toDoCompleted status correctly toDo[1] == false', function () {
        assert.equal(api.httpGet('https://jsonplaceholder.typicode.com/todos/1')['completed'], false);
    });
});
