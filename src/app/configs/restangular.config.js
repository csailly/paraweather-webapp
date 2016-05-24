(function () {
    'use strict';

    angular.module('siteWeather.configs')
        .config(restangularConfig);

    function restangularConfig(RestangularProvider) {
        RestangularProvider.setBaseUrl("http://localhost:8080/");
        RestangularProvider.setDefaultHttpFields({cache: true});
    }


})();
