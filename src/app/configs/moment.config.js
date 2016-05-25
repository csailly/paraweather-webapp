(function () {
    'use strict';

    angular.module('siteWeather.configs')
        .config(momentConfig);

    function momentConfig() {
        moment.locale('fr');
    }


})();
