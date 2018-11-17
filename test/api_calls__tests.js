var api = require('../api_calls.js');
var assert = require('assert');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe('Simple tests on API calls', function () {
 it('should return toDoCompleted status correctly toDo[1] == false', function () {
        assert.equal(api.httpGet('https://jsonplaceholder.typicode.com/todos/1')['completed'], false);
    });
 it('should return newPostDetails', function () {
		assert.equal(api.httpPost('https://jsonplaceholder.typicode.com/posts/')['title'], "Obojetne");
	});
it('should return details with promises', function () {
		return expect(Promise.resolve(api.httpPost('https://jsonplaceholder.typicode.com/posts/')).should.eventually.have.property('title'));
});

});
