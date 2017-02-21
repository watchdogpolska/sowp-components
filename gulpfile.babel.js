import gulp from 'gulp';

import browserSync from 'browser-sync';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';
import isCi from 'is-ci';
import merge from 'merge-stream';
import octophant from 'octophant';
import runSequence from 'run-sequence';
import sherpa from 'style-sherpa';

// Post CSS plugins
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const $ = gulpLoadPlugins();
const bs = browserSync.create();
const reload = bs.stream;

// SCSS
gulp.task('scss', ['scss:icons', 'scss:components', 'scss:bootstrap']);

function scss(file, basename) {
  return gulp.src([file])
      .pipe($.rename({ basename }))
      .pipe($.if(!isCi, $.plumber()))
      .pipe($.sass({
        includePaths: ['./node_modules'],
      }))
      .pipe($.postcss([autoprefixer]))
      .pipe(gulp.dest('./dist/css/'))
      .pipe(reload())
      .pipe($.postcss([cssnano]))
      .pipe($.rename({ extname: '.min.css' }))
      .pipe($.if(!isCi, $.plumber.stop()))
      .pipe(gulp.dest('./dist/css/'))
      .pipe(reload());
}

gulp.task('scss:components', ['scss-settings', 'scss-lint'], () =>
  scss('./assets/stylesheets/_sowp.scss', 'sowp-components')
);

gulp.task('scss:bootstrap', ['scss-settings', 'scss-lint'], () =>
  scss('./assets/stylesheets/_sowp-bootstrap.scss', 'sowp-bootstrap')
);

gulp.task('scss:icons', ['iconfont-gen'], () =>
  scss('./assets/stylesheets/_sowp-icons.scss', 'sowp-icons')
);

gulp.task('scss-lint', () =>
  // Exclude _icons_generated.scss, because template use tabs instead spaces for indendation
  gulp.src(['./assets/stylesheets/**/*.scss', '!**/*_icons_generated.scss'])
      .pipe($.scssLint())
);


gulp.task('scss-settings', () => {
  octophant('./assets/stylesheets/**/*.scss', {
    title: 'Sowp Components',
    output: './assets/stylesheets/sowp/_settings.scss',
    sort: ['global', 'colors'],
  });
});

// Javascript
gulp.task('js', ['js:single', 'js:combined']);

function js(concat) {
  return gulp.src('./assets/javascript/**/*.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.if(concat, $.concat('sowp-components.js')))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload())
    .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.rename({ extname: '.min.js' }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload());
}

gulp.task('js:single', ['js-lint'], () =>
  js(false)
);

gulp.task('js:combined', ['js-lint'], () =>
  js(true)
);

gulp.task('js-lint', () =>
  gulp.src('./assets/javascript/**/*.js')
      .pipe($.eslint())
);

// Icons
gulp.task('iconfont-gen', () => {
  const fontName = 'sowp';
  return gulp.src(['./assets/icons/*.svg'])
    .pipe($.iconfontCss({
      fontName,
      path: 'scss',
      targetPath: '../stylesheets/sowp-icons/_icons_generated.scss',
      fontPath: '../fonts/',
      cssClass: 'isowp',
    }))
    .pipe($.iconfont({
      fontName,
      formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
      normalize: true,
    }))
    .pipe(gulp.dest('./assets/fonts/'));
});

gulp.task('iconfont', () => gulp.src('./assets/fonts/*').pipe(gulp.dest('./dist/fonts/')));


// Style guide
function styleguide(input, output, cb) {
  sherpa(input, {
    output,
    template: './assets/styleguide/template.html',
  }, () => {
    bs.reload();
    cb();
  });
}

gulp.task('styleguide', ['styleguide:bootstrap', 'styleguide:components', 'styleguide:icons']);

gulp.task('styleguide:components', (done) =>
  styleguide('./assets/styleguide/index.md', './dist/index.html', done)
);

gulp.task('styleguide:bootstrap', (done) =>
  styleguide('./assets/styleguide/bootstrap.md', './dist/bootstrap.html', done)
);

gulp.task('styleguide:icons', (done) =>
  styleguide('./assets/styleguide/icons.md', './dist/icons.html', done)
);


// Clean
gulp.task('clean', () => del(['./dist/**/*']));

// Server
gulp.task('server', () => {
  bs.init({
    server: {
      baseDir: ['./dist/'],
    },
  });
});

// Watch changes
gulp.task('watch', () => {
  gulp.watch([
    './assets/stylesheets/_sowp.scss',
    './assets/stylesheets/sowp/**/*.scss',
  ], ['scss:components']);
  gulp.watch([
    './assets/stylesheets/_sowp-bootstrap.scss',
    './assets/stylesheets/sowp-bootstrap/**/*.scss',
  ], ['scss:bootstrap']);
  gulp.watch([
    './assets/stylesheets/_sowp-icons.scss',
    './assets/stylesheets/sowp-icons/**/*.scss',
  ], ['scss:icons']);

  gulp.watch('./assets/icons/**/*.svg', () => runSequence(
    'iconfont-gen',
    'styleguide:icons',
    'scss:icons'));
  gulp.watch('./assets/javascript/**/*.js', ['js']);
  gulp.watch('./assets/styleguide/**/*', ['styleguide']);
  gulp.watch('package.json', ['build']);
});

// Run all task in sequences
gulp.task('build', cb =>
  runSequence(
    'clean',
    'iconfont-gen',
    ['iconfont', 'styleguide', 'js', 'scss'],
    cb
  )
);

gulp.task('default', cb => runSequence('build', ['server', 'watch'], cb));
