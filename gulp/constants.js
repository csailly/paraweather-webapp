'use strict';

var gulp = require('gulp');
var ngConstant = require('gulp-ng-constant');
var rename = require("gulp-rename");

module.exports = function (options) {
    gulp.task('constants', function () {
            var apiBaseUrl = process.env.apiBaseUrl;
            var casUrl = process.env.casUrl;
            return ngConstant({
                name: 'ds.config',
                deps: ['restangular', 'ngNumeraljs'],
                constants: {
                    "apiBaseUrl": apiBaseUrl,
                    "casUrl" : casUrl,
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
