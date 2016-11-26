var gulp = require('gulp'),
    pump = require('pump'),
    path = require('path'),
    runSequence = require('run-sequence'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    csswring = require('csswring'),
    autoprefixer = require('autoprefixer'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    refresh = require('gulp-refresh'),
    jshint = require('gulp-jshint'),
    compass = require('gulp-compass'),
    wiredep = require('wiredep').stream,
    concatJS = require('gulp-concat'),
    concatCSS = require('gulp-concat-css');

var srcStyles = [
    './assets/sass/**/*.scss'
];

var srcCSS = [
    './assets/css/*.css'
];

var srcJs = [
    '!./assets/js/vendor/**/*.js',
    './assets/js/**/*.js'
];

var srcPaths = srcStyles.concat(srcJs);
srcPaths.push('**/*.html');
srcPaths.push('**/*.php');

var srcWiredep = [
    './header.php',
    './footer.php'
];

gulp.task('styles', function () {
    var processors = [
        csswring,
        autoprefixer
    ];

    pump([
        gulp.src(srcStyles),
        compass({
            config_file: './config.rb',
            css: './assets/css',
            sass: './assets/sass'
        }),
        postcss(processors),
        gulp.dest('./assets/css/')
    ]);
});

gulp.task('jshint', function () {
    pump([
        gulp.src(srcJs),
        jshint(),
        jshint.reporter('default'),
        refresh()
    ]);
});

gulp.task('compress-js', function () {
    pump([
        gulp.src(srcJs),
        uglify(),
        gulp.dest('dist')
    ]);
});

gulp.task('concat-js', function () {
    pump([
        gulp.src(srcJs),
        concatJS('all.js'),
        gulp.dest('./dist/assets/js')
    ]);
});

gulp.task('compress-css', function () {
    pump([
        gulp.src(srcCSS),
        cleanCSS({compatibility: 'ie8'}),
        gulp.dest('dist')
    ]);
});

gulp.task('concat-css', function () {
    pump([
        gulp.src(srcCSS),
        concatCSS('styles/all.css'),
        gulp.dest('./dist/')
    ]);
});

gulp.task('styles', function () {
    pump([
        gulp.src(srcCSS),
        concatCSS('styles/test.css'),
        cleanCSS({compatibility: 'ie8'}),
        gulp.dest('./dist/')
    ]);
});

gulp.task('scripts', function () {
    pump([
        gulp.src(srcJs),
        concatJS('scripts/all.js'),
        uglify(),
        gulp.dest('./dist/')
    ]);
});

gulp.task('reload', function () {
    pump([
        gulp.src(srcPaths),
        refresh()
    ]);
});

gulp.task('fonts', function () {
    pump([
        gulp.src([
            'bower_components/font-awesome/fonts/fontawesome-webfont.*']),
        gulp.dest('./assets/fonts/')
    ]);
});

gulp.task('bower', function () {
    pump([
        gulp.src(srcWiredep),
        wiredep({
            bowerJson: require('./bower.json')
        }),
        gulp.dest('./')
    ]);
});

gulp.task('watch:styles', function () {
    gulp.watch('**/*.scss', ['styles']);
});

gulp.task('compress-js', function (cb) {
    pump([
            gulp.src('./assets/js/*.js'),
            uglify(),
            gulp.dest('./dist')
        ],
        cb);
});

gulp.task('compress-css', function () {
    pump([
        gulp.src('./assets/css/*.css'),
        cleanCSS({compatibility: 'ie8'}),
        gulp.dest('dist')
    ]);
});

gulp.task('build', function () {
    runSequence('bower', 'fonts', 'compress-css', 'compress-js');
});

gulp.task('watch', function () {
    refresh.listen();
    refresh.options.quiet = true;

    gulp.watch(srcPaths, function () {
        runSequence('styles', ['reload']);
    });
});