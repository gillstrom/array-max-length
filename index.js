'use strict';
module.exports = function (input, length) {
	if (!Array.isArray(input)) {
		throw new TypeError('Expected an array');
	}

	var ret = input.slice();

	if (ret.length > length) {
		ret.length = length;
	}

	return ret;
};
