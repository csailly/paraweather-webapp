(function () {
    'use strict';

    angular.module('siteWeather.configs')
        .config(restangularConfig);

    function restangularConfig(RestangularProvider,appConfig) {
        RestangularProvider.setBaseUrl([appConfig.api.baseUrl, appConfig.api.version].join('/'));
        RestangularProvider.setDefaultHttpFields({cache: true});
    }


})();
