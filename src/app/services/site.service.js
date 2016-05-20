(function () {
    'use strict';

    angular.module('siteWeather.services')
        .factory('siteService', siteService);

    function siteService(siteApiService) {

        var service = {
            getSites: getSites
        };

        return service;

        //--------------------------

        function getSites() {
            return siteApiService.getSites();
        }
    }
})();
