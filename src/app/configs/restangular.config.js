(function () {
    'use strict';

    angular.module('siteWeather.configs')
        .config(restangularConfig);

    function restangularConfig(RestangularProvider) {
        RestangularProvider.setBaseUrl("/");
        RestangularProvider.setDefaultHttpFields({cache: true});
    }


})();
