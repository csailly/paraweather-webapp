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
                .one('date')
                .one(date)
                .one('lat')
                .one(lat)
                .one('lng')
                .one(lng)
                .one('/')
                .get();
        }
    }
})();
