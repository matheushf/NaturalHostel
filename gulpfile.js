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
    concatCSS = require('gulp-concat-css'),
    mainBowerFiles = require('main-bower-files'),
    rename = require('gulp-rename'),
    gulpIf = require('gulp-if');

var srcStyles = [
    './src/assets/sass/**/*.scss'
];

var srcCSS = [
    './src/assets/css/*.css'
];

var srcJs = [
    '!./src/assets/js/vendor/**/*.js',
    './src/assets/js/**/*.js'
];

var srcPaths = srcStyles.concat(srcJs);
srcPaths.push('**/*.html');
srcPaths.push('**/*.php');

var srcWiredep = [
    './src/header.php',
    './src/footer.php'
];

var srcGeneral = [
    './src/assets/img/**/*',
    './src/assets/fonts/**/*',
    './src/libs/*',
    './src/pages/*',
    './src/*.*'
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
        gulp.dest('dist/assets/js')
    ]);
});

gulp.task('concat-js', function () {
    pump([
        gulp.src(srcJs),
        concatJS('all.js'),
        gulp.dest('./dist/assets/js/')
    ]);
});

gulp.task('compress-css', function () {
    pump([
        gulp.src(srcCSS),
        cleanCSS({compatibility: 'ie8'}),
        gulp.dest('./dist/assets/css/')
    ]);
});

gulp.task('concat-css', function () {
    pump([
        gulp.src(srcCSS),
        concatCSS('styles/all.css'),
        gulp.dest('./dist/')
    ]);
});

gulp.task('styles-build', function () {
    pump([
        gulp.src(srcCSS),
        concatCSS('styles/test.css'),
        cleanCSS({compatibility: 'ie8'}),
        gulp.dest('./dist/')
    ]);
});

gulp.task('scripts-build', function () {
    pump([
        gulp.src(srcJs),
        concatJS('scripts/test.js'),
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
        gulp.dest('./assets/')
    ]);
});

gulp.task('fonts-dist', function () {
    pump([
        gulp.src([
            'bower_components/font-awesome/fonts/fontawesome-webfont.*'], {base: './bower_components/'}),
        gulp.dest('./dist/assets/')
    ]);
});

gulp.task('bower', function () {
    /*pump([
        gulp.src(srcWiredep),
        wiredep({
            bowerJson: require('./bower.json')
        }),
        gulp.dest('./')
    ]);*/

    var condition = function (file) {
        var ext = file.path.split('.');
        ext = ext[ext.length - 1];

        if (ext == 'js')
            return true;

        return false;
    };

    pump([
        gulp.src(mainBowerFiles()),
        gulpIf(condition, concatJS('vendor.js'), concatCSS('vendor.css')),
        gulpIf(condition, uglify(), cleanCSS()),
        rename(function (path) {

            if (path.extname == '.js') {
                path.dirname += '/js'
            } else {
                path.dirname += '/css'
            }
        }),
        gulp.dest('src/assets/')
    ]);

});

gulp.task('watch:styles', function () {
    gulp.watch('**/*.scss', ['styles']);
});

gulp.task('watch', function () {
    refresh.listen();
    refresh.options.quiet = true;

    gulp.watch(srcPaths, function () {
        runSequence('styles', ['reload']);
    });
});

gulp.task('build', function () {
    runSequence('bower', 'fonts-dist', 'compress-css', 'compress-js');

    pump([
        gulp.src(srcGeneral, {base: './src'}),
        gulp.dest('./dist')
    ]);
});