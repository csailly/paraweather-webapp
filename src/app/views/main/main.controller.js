(function () {
    'use strict';

    angular.module('siteWeather.views')
        .controller('MainController', MainController);

    function MainController($log, weatherService, calendarService) {
        var vm = this;

        vm.datas;
        vm.dates;

        vm.showSiteDetails = false;
        vm.showWeatherDetails = false;
        vm.toggleSiteDetails = toggleSiteDetails;
        vm.toggleWeatherDetails = toggleWeatherDetails;

        activate();

        //---------------------------

        function activate() {
            vm.datas = weatherService.readAll();
            $log.info("Weather datas => ",vm.datas);
            vm.dates = calendarService.getDates();
            $log.info("Dates => ",vm.dates);

        }

        function toggleSiteDetails() {
            vm.showSiteDetails = !vm.showSiteDetails;
        }

        function toggleWeatherDetails() {
            vm.showWeatherDetails = !vm.showWeatherDetails;
        }


    }

})();
