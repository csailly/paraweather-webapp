'use strict';

var gulp = require('gulp');
var ngConstant = require('gulp-ng-constant');
var rename = require("gulp-rename");

module.exports = function (options) {
    gulp.task('constants', function () {
            var apiBaseUrl = process.env.apiBaseUrl;
            return ngConstant({
                name: 'siteWeather.config',
                deps: ['restangular'],
                constants: {
                    "apiBaseUrl": apiBaseUrl,
                },
                stream: true
            })
                .pipe(rename("config.module.js"))
                .pipe(gulp.dest('src/app/config/'));
        }
    )
    ;
}
;
