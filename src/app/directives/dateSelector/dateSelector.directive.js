(function () {
    'use strict';

    angular.module('siteWeather.directives')
        .directive('dateSelector', dateSelectorDirective);

    function dateSelectorDirective() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/dateSelector/dateSelector.html',
            controller: 'dateSelectorController',
            controllerAs : 'dateSelector',
            scope: {
                dates : '='
            },
            bindToController : true
        };
    }


})();
