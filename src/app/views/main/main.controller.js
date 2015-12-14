(function () {
    'use strict';

    angular.module('siteWeather.views')
        .controller('MainController', MainController);

    function MainController(weatherService) {
        var vm = this;

        vm.datas = undefined;

        vm.showSiteDetails = false;
        vm.showWeatherDetails = false;
        vm.toggleSiteDetails = toggleSiteDetails;
        vm.toggleWeatherDetails = toggleWeatherDetails;

        activate();

        //---------------------------

        function activate() {
            vm.datas = weatherService.readAll();
            console.log(vm.datas);
        }

        function toggleSiteDetails() {
            vm.showSiteDetails = !vm.showSiteDetails;
        }

        function toggleWeatherDetails() {
            vm.showWeatherDetails = !vm.showWeatherDetails;
        }


    }

})();
