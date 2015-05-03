var gulp = require('gulp');
var gulpJshint = require('gulp-jshint');
var gulpConcat = require('gulp-concat');
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var gulpJscs = require('gulp-jscs');
var karmaServer = require('karma').server;
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var angularFilesort = require('gulp-angular-filesort');

var getBundleName = function () {
    var name = require(__dirname + '/../package.json').name;
    return name + '.' + 'min';
};

var outputPath = __dirname + '/app/dist/';

/**
 *  Tasks
 */
gulp.task('default', ['jshint', 'jscs', 'dev']);
gulp.task('clean', clean);
gulp.task('gulpConcat', ['clean'], concat);
gulp.task('gulpJshint', ['clean'], jshint);
gulp.task('gulpJscs', jscs);
gulp.task('dev', ['clean'], devBuild);
gulp.task('prod', ['clean', 'concat'], productionBuild);
gulp.task('karma', karma);
gulp.task('karma-watch', karmaWatch);

/**
 * Functions
 */
function clean(cb) {
    del([outputPath + '**'], cb);
}

function jshint() {
    return gulp.src([
        __dirname + '/gulpfile.js',
        __dirname + '/app/**/**.js',
        __dirname + '../test/e2e/**.js',
        __dirname + '../test/unit/**.js',
        '!' + outputPath + '**'
    ])
        .pipe(gulpJshint())
        .pipe(gulpJshint.reporter('default'))
        .pipe(gulpJshint.reporter('fail'));
}

function jscs() {
    return gulp.src([
        __dirname + '/gulpfile.js',
        __dirname + '/app/**/**.js',
        __dirname + '../test/e2e/**.js',
        __dirname + '../test/unit/**.js',
        '!' + outputPath + '**'
    ])
        .pipe(gulpJscs({configPath: '.jscsrc'}));
}

/**
 * Run test once and exit
 */
function karma(done) {
    karmaServer.start({
        configFile: __dirname + '/../test/unit/karma.conf.js',
        singleRun: true
    }, done);
}

function karmaWatch(done) {
    karmaServer.start({
        configFile: __dirname + '/../test/unit/karma.conf.js',
        singleRun: false,
        autoWatch: true
    }, done);
}

function concat() {
    return gulp.src([
        __dirname + '/app/boomerang.module.js',
        __dirname + '/app/boomerang.config.js',
        __dirname + '/app/services/*.js',
        __dirname + '/app/**/**.js',
        '!' + outputPath + '**'
    ])
        .pipe(gulpConcat('boomerang.js'))
        .pipe(gulp.dest(outputPath));
}

function productionBuild() {
    var bundler = browserify({
        entries: [outputPath + 'boomerang.js'],
        debug: true
    });

    var bundle = function () {
        return bundler.bundle()
            .pipe(source(getBundleName() + '.js'))
            .pipe(buffer())
            .pipe(ngAnnotate())
            .pipe(sourcemaps.init({loadMaps: true}))
            // Add transformation tasks to the pipeline here.
            .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(outputPath));
    };

    return bundle();
}

function devBuild() {
    var target = gulp.src(__dirname + '/index.html');
    var sources = gulp.src([__dirname + '/app/**/**.js'], {read: true});
    var styles = gulp.src([__dirname + '/app/**/**.css'], {read: false});

    return target
        .pipe(inject(gulp.src(mainBowerFiles(), {read: false}), {name: 'bower'}))
        .pipe(inject(sources.pipe(angularFilesort())))
        .pipe(inject(styles))
        .pipe(gulp.dest(__dirname));
}
