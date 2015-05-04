'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var stripShebang = require('strip-shebang');

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-strip-shebang', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(stripShebang(file.contents.toString()));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-strip-shebang', err));
		}

		cb();
	});
};
