'use strict';
module.exports = (input, length) => {
	if (!Array.isArray(input)) {
		throw new TypeError(`Expected an \`Array\`, got \`${typeof input}\``);
	}

	const ret = input.slice();

	if (ret.length > length) {
		ret.length = length;
	}

	return ret;
};
