'use strict';
var test = require('ava');
var arrayMaxLength = require('./');
var arr = [1, 2, 3, 4, 5];

test(function (t) {
	t.is(arrayMaxLength(arr, 3).length, 3);
	t.is(arrayMaxLength(arr, 0).length, 0);
	t.is(arrayMaxLength(arr, 10).length, 5);
	t.is(arrayMaxLength([], 5).length, 0);
	t.end();
});
