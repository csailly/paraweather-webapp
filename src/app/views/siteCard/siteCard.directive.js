(function () {
    'use strict';

    angular.module('siteWeather.views')
        .directive('siteCard', siteCardDirective);


    function siteCardDirective() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/views/siteCard/siteCard.html',
            controller: 'siteCardController',
            controllerAs: 'siteCard',
            scope: {
                siteDatas: '=',
                weatherDatas: '='
            },
            bindToController: true
        }
    }


})();
