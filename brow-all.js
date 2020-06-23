// var bulk = require('bulk-require');
// var sections = bulk(__dirname, [ 'es5/*.js', 'es5/**/*.js' ]);
// console.log(sections)
var browserify = require('browserify')

browserify('./js/script.js', { debug: true })
      .add(require.resolve('babel-polyfill'))
      .transform(babelify.configure({presets: ['es2015']}))
      .bundle()
      .on('error', util.log.bind(util, 'Browserify Error'))
      .pipe(source('all.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify({ mangle: false }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./www/js'));