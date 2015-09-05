# array-max-length [![Build Status](https://travis-ci.org/gillstrom/array-max-length.svg?branch=master)](https://travis-ci.org/gillstrom/array-max-length)

> Returns a new array with the given maximum length


## Install

```
$ npm install --save array-max-length
```


## Usage

```js
var arrayMaxLength = require('array-max-length');
var arr = [1, 2, 3, 4, 5];

arrayMaxLength(arr, 2);
// => [1, 2]

arrayMaxLength(arr, 10);
// => [1, 2, 3, 4, 5]
```


## API

### arrayMaxLength(input, length)

Returns the new array.

#### input

Type: `array`

#### length

Type: `number`

The maximum length of the array.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
