(function () {
    'use strict';

    angular.module('siteWeather.directives')
        .directive('siteCard', siteCardDirective);


    function siteCardDirective() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/siteCard/siteCard.html',
            controller: 'SiteCardController',
            controllerAs: 'siteCard',
            scope: {
                siteDatas: '=',
                weatherDatas: '='
            },
            bindToController: true
        }
    }


})();
