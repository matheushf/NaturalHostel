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
    concat = require('gulp-concat');

var srcStyles = [
    '/src/assets/sass/**/*.scss'
];
var srcJs = [
    '!/src/assets/js/vendor/**/*.js',
    '/src/assets/js/**/*.js'
];

var srcPaths = srcStyles.concat(srcJs);
srcPaths.push('**/*.html');
srcPaths.push('**/*.php');

var srcWiredep = [
    '/src/header.php',
    '/src/footer.php'
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
            css: '/src/assets/css',
            sass: '/src/assets/sass'
        }),
        postcss(processors),
        gulp.dest('/src/assets/css/')
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

gulp.task('compress-css', function () {
    pump([
        gulp.src('/src/assets/css/*.css'),
        cleanCSS({compatibility: 'ie8'}),
        gulp.dest('dist')
    ]);
});

gulp.task('concat', function () {
    pump([
        gulp.src(srcJs),
        concat('all.js'),
        gulp.dest('/dist/assets/js')
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
        gulp.dest('/src/assets/fonts/')
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

gulp.task('compress-js', function () {
    pump([
        gulp.src('/src/assets/js/*.js'),
        uglify(),
        gulp.dest('dist')
    ]);
});

gulp.task('compress-css', function () {
    pump([
        gulp.src('/src/assets/css/*.css'),
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