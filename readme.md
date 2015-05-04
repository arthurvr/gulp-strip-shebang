# gulp-strip-shebang [![Build Status](https://travis-ci.org/arthurvr/gulp-strip-shebang.svg?branch=master)](https://travis-ci.org/arthurvr/gulp-strip-shebang)

> Gulp plugin for the [`strip-shebang`](https://github.com/sindresorhus/strip-shebang) module. Strips the shebang from a file.


## Install

```
$ npm install --save-dev gulp-strip-shebang
```


## Usage

```js
var gulp = require('gulp');
var stripShebang = require('gulp-strip-shebang');

gulp.src('src/script.sh')
	.pipe(stripShebang())
	.pipe(gulp.dest('dist'));
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
