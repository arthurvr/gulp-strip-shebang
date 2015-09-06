'use strict';
var test = require('ava');
var path = require('path');
var gutil = require('gulp-util');
var stripShebang = require('./');

test('Should strip shebang', function (t) {
	t.plan(1);

	var stream = stripShebang();

	stream.on('data', function (file) {
		t.is(file.contents.toString(), '\nSomething');
	});

	stream.write(new gutil.File({
		base: __dirname,
		path: path.join(__dirname, 'file.ext'),
		contents: new Buffer('#!/bin/sh\nSomething')
	}));

	stream.end();
});
