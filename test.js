import test from 'ava';
import path from 'path';
import gutil from 'gulp-util';
import stripShebang from './';

test('Should strip shebang', t => {
	t.plan(1);

	const stream = stripShebang();

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
