(function () {
    'use strict';

    angular.module('siteWeather.views')
        .directive('dateSelector', dateSelectorDirective);

    function dateSelectorDirective() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/views/dateSelector/dateSelector.html',
            controller: 'dateSelectorController',
            controllerAs : 'dateSelector',
            scope: {
                dates : '='
            },
            bindToController : true
        };
    }


})();
