(function () {
    'use strict';

    angular.module('siteWeather.services')
        .factory('weatherService', weatherService);

    function weatherService(weatherApiService) {

        var service = {
            getByDateAndLocation: getByDateAndLocation
        };

        return service;


        function getByDateAndLocation(date, lat, lng) {
            return weatherApiService.getByDateAndLocation(date, lat, lng);
        }
    }
})();
