# array-max-length [![Build Status](https://travis-ci.org/gillstrom/array-max-length.svg?branch=master)](https://travis-ci.org/gillstrom/array-max-length)

> Returns a new `Array` with the given maximum length


## Install

```
$ npm install array-max-length
```


## Usage

```js
const arrayMaxLength = require('array-max-length');

const arr = [1, 2, 3, 4, 5];

arrayMaxLength(arr, 2);
// => [1, 2]

arrayMaxLength(arr, 10);
// => [1, 2, 3, 4, 5]
```


## API

### arrayMaxLength(input, length)

Returns a new `Array` with the given length.

#### input

Type: `Array`

Input to return the new `Array` from.

#### length

Type: `number`

The maximum length of the `Array`.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
