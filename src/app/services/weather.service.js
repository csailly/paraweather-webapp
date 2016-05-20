(function () {
    'use strict';

angular.module('siteWeather.services')
    .factory('weatherService', weatherService);

function weatherService(weatherApiService) {

    var service = {
        getBySiteIdAndDate: getBySiteIdAndDate
    };

    return service;


    function getBySiteIdAndDate(siteId, date) {
        return weatherApiService.getBySiteIdAndDate(siteId, date);
    }
}
})();
