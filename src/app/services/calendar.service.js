(function () {
    'use strict';

angular.module('siteWeather.services')
    .factory('calendarService', calendarService);

function calendarService(calendarApiService) {

    var service = {
        getDates: getDates
    };

    return service;

    //-----------------------------

    function getDates() {
        return calendarApiService.getDates();
    }
}
})();
