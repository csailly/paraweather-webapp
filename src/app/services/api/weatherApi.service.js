(function () {
    'use strict';

    angular.module('siteWeather.services')
        .factory('weatherApiService', weatherApiService);

    function weatherApiService(Restangular) {

        var service = {
            getByDateAndLocation: getByDateAndLocation
        };

        return service;

        //-----------------------------------

        function getByDateAndLocation(date, lat, lng) {
            return Restangular
                .one('forecast')
                .one('byLocation')
                .one('lat')
                .one(lat)
                .one('lng')
                .one(lng)
                .one('date')
                .one(date)
                .get();
        }
    }
})();
