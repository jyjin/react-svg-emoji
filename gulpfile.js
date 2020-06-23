const { src, dest, series, parallel, task } = require('gulp');
const babel = require('gulp-babel');
const svg = require('svg-browserify');
const browserify = require('gulp-browserify');
const gulpCopy = require('gulp-copy');
const bulkify = require('bulkify');
const Buffers = require('buffers');
const webserver = require('gulp-webserver');

// 修复buffers低版本bug
Buffers.prototype.get = function get(i) {
  var pos = this.pos(i);

  return this.buffers[pos.buf][pos.offset];
};


function toEs5(done) {
  return src(['src-emoji/*.js', 'src-emoji/**/*.js'])
    .pipe(babel())
    .pipe(dest('es5/'))
}

function copyAssets(done) {
  return src(['src-emoji/svg/*.svg'])
    .pipe(dest('es5/svg'))
}

function copyPackage(done) {
  return src(['public/package.json'])
    .pipe(dest('es5/'))
}


function toBrowserJavascript(done) {
  return src(['es5/emoji.js'])
    .pipe(browserify({
      insertGlobals: true,
      ignore: ['react', 'svg'],
      debug: true
    }))
    .pipe(dest('dist/'))
}

function server() {
  return src('example')
    .pipe(webserver({
      port: 8001,
      livereload: true,
      directoryListing: false,
      open: true
    }));
}

task('default', series(parallel(toEs5, copyAssets), toBrowserJavascript, copyPackage))
task('start', series(parallel(server)))
