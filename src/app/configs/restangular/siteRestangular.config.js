(function() {
    'use strict';

    angular
        .module('siteWeather.configs')
        .factory('SiteRestangular', SiteRestangular);

    function SiteRestangular(Restangular, appConfig) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl(appConfig.apiBaseUrl + '/v1/site/');
            RestangularConfigurer.setDefaultHttpFields({cache: true});
        });
    }
})();
