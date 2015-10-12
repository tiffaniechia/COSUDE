var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');


gulp.task('start', function () {
    nodemon({
        script: './bin/www'
        , ext: 'js html ejs'
        , env: {'NODE_ENV': 'development'}
        //, ignore: ['test/**/*.js']
    })
        .on('restart', function () {
            console.log('restarted!')
        })
});