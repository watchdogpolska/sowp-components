import gulp from 'gulp';
import browserSync from 'browser-sync';
import merge from 'merge-stream';
import del from 'del';
import mainBowerFiles from 'main-bower-files';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

// Post CSS plugins
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const $ = gulpLoadPlugins();
const bowerFiles = mainBowerFiles();
const bs = browserSync.create();
const reload = bs.stream;

gulp.task('scss', ['scss-lint'], () =>
  gulp.src('./assets/stylesheets/_sowp.scss')
      .pipe($.rename({ basename: 'sowp-components' }))
      .pipe($.sass())
      .pipe($.postcss([autoprefixer]))
      .pipe(gulp.dest('./dist/css/'))
      .pipe(reload())
      .pipe($.postcss([cssnano]))
      .pipe($.rename({ extname: '.min.css' }))
      .pipe(gulp.dest('./dist/css/'))
      .pipe(reload())
);

gulp.task('scss-lint', () =>
  gulp.src('./assets/stylesheets/**/*.scss')
      .pipe($.scssLint())
);

gulp.task('server', () => {
  bs.init({
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
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload())
    .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.rename({ extname: '.min.js' }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload());

  const full = merge(
      vendor.pipe($.concat('vendor.js')),
      project.pipe($.babel()).pipe($.concat('project.js'))
    )
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.concat('sowp-components.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload())
    .pipe($.uglify())
    .pipe($.rename({ extname: '.min.js' }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js/'))
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

gulp.task('default', ['server', 'build', 'watch']);
