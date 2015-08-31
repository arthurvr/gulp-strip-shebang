'use strict';
var assert = require('assert');
var path = require('path');
var gutil = require('gulp-util');
var stripShebang = require('./');

it('Should strip shebang', function (cb) {
	var stream = stripShebang();

	stream.on('data', function (file) {
		assert.strictEqual(file.contents.toString(), '\nSomething');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		base: __dirname,
		path: path.join(__dirname, 'file.ext'),
		contents: new Buffer('#!/bin/sh\nSomething')
	}));

	stream.end();
});
