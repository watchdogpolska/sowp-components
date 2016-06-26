const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const merge = require('merge-stream');
const del = require('del');
const bowerFiles = require('main-bower-files')();
const $ = require('gulp-load-plugins')();
const runSequence = require('run-sequence');

// Post CSS plugins
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const reload = browserSync.stream;

gulp.task('scss', ['scss-lint'], () =>
  gulp.src('./assets/stylesheets/_sowp.scss')
      .pipe($.rename({ basename: 'sowp-components' }))
      .pipe($.sass())
      .pipe($.postcss([autoprefixer]))
      .pipe(gulp.dest('./dist/'))
      .pipe(reload())
      .pipe($.postcss([cssnano]))
      .pipe($.rename({ extname: '.min.css' }))
      .pipe(gulp.dest('./dist/'))
      .pipe(reload())
);

gulp.task('scss-lint', () =>
  gulp.src('./assets/stylesheets/**/*.scss')
      .pipe($.scssLint())
);

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: ['./docs/', './dist/'],
    },
  });
});

gulp.task('js', ['js-lint'], () => {
  const vendor = gulp.src(bowerFiles);
  const project = gulp.src('./assets/javascript/**/*.js');

  const components = project
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe(gulp.dest('./dist/'))
    .pipe(reload())
    .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.rename({ extname: '.min.js' }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(reload());

  const full = merge(
      vendor.pipe($.concat('vendor.js')),
      project.pipe($.babel()).pipe($.concat('project.js'))
    )
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.concat('sowp-components.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(reload())
    .pipe($.uglify())
    .pipe($.rename({ extname: '.min.js' }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
    .pipe(reload());

  return merge(components, full);
});

gulp.task('js-lint', () =>
  gulp.src('./assets/javascript/**/*.js')
      .pipe($.eslint())
);

gulp.task('clean', () => del(['./dist/**/*']));

gulp.task('watch', () => {
  gulp.watch('./assets/stylesheets/**/*.scss', ['scss']);
  gulp.watch('./assets/javascript/**/*.js', ['js']);
});

gulp.task('build', cb => runSequence('clean', ['js', 'scss'], cb));

gulp.task('default', ['build', 'watch']);
