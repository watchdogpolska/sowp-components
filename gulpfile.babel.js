import gulp from 'gulp';

import browserSync from 'browser-sync';
import merge from 'merge-stream';
import del from 'del';
import mainBowerFiles from 'main-bower-files';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import sherpa from 'style-sherpa';
import octophant from 'octophant';

// Post CSS plugins
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const $ = gulpLoadPlugins();
const bowerFiles = mainBowerFiles();
const bs = browserSync.create();
const reload = bs.stream;

gulp.task('scss', ['scss-settings', 'scss-lint'], () =>
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

gulp.task('server', () => {
  bs.init({
    server: {
      baseDir: ['./dist/'],
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

gulp.task('iconfont-gen', () => {
  const fontName = 'sowp';
  return gulp.src(['./assets/icons/*.svg'])
    .pipe($.iconfontCss({
      fontName,
      path: 'scss',
      targetPath: '../stylesheets/sowp/_icons_generated.scss',
      fontPath: '../fonts/',
      cssClass: 'isowp',
    }))
    .pipe($.iconfont({
      fontName,
      formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
    }))
    .pipe(gulp.dest('./assets/fonts/'));
});

gulp.task('iconfont', () => gulp.src('./assets/fonts/*').pipe(gulp.dest('./dist/fonts/')));

gulp.task('styleguide', (done) =>
  sherpa('./assets/styleguide/index.md', {
    output: './dist/index.html',
    template: './assets/styleguide/template.html',
  }, () => {
    bs.reload();
    done();
  })
);

gulp.task('clean', () => del(['./dist/**/*']));

gulp.task('watch', () => {
  gulp.watch('./assets/stylesheets/**/*.scss', ['scss']);
  gulp.watch('./assets/icons/**/*.svg', cb => runSequence('iconfont-gen', 'scss', cb));
  gulp.watch('./assets/javascript/**/*.js', ['js']);
  gulp.watch('./assets/styleguide/**/*', ['styleguide']).on('change', bs.reload);
  gulp.watch('.bower.json', ['build']);
  gulp.watch('package.json', ['build']);
});

gulp.task('build', cb =>
  runSequence(
    'clean',
    'iconfont-gen',
    ['iconfont', 'styleguide', 'js', 'scss'],
    cb
  )
);

gulp.task('default', cb => runSequence('build', ['server', 'watch'], cb));
