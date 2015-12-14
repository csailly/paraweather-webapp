(function () {
    'use strict';

angular.module('siteWeather.services')
    .factory('weatherService', weatherService);

function weatherService(siteApiService) {

    var service = {
        readAll: readAll
    };

    return service;


    function readAll() {
        return siteApiService.readAll();
    }
}
})();
