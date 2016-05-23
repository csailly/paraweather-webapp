(function () {
    'use strict';

    angular.module('siteWeather.views')
        .controller('MainController', MainController);

    function MainController($log, $q, $stateParams, weatherService, siteService, calendarService) {
        var vm = this;

        vm.showSiteDetails = false;
        vm.showWeatherDetails = false;
        vm.toggleSiteDetails = toggleSiteDetails;
        vm.toggleWeatherDetails = toggleWeatherDetails;

        activate();

        //---------------------------

        function activate() {
            $q.all([calendarService.getDates(), siteService.getSites()])
                .then(function (datas) {
                    vm.dates = datas[0];
                    $log.info("Dates => ", vm.dates);
                    vm.sites = datas[1];
                    $log.info("Sites => ", vm.sites);

                    vm.siteWeather = {};
                    _.each(vm.sites, function (site) {
                        weatherService.getBySiteIdAndDate(site.id, $stateParams.day)
                            .then(function(weather){
                                vm.siteWeather[site.id] = weather;
                            });
                    });

                });
        }

        function toggleSiteDetails() {
            vm.showSiteDetails = !vm.showSiteDetails;
        }

        function toggleWeatherDetails() {
            vm.showWeatherDetails = !vm.showWeatherDetails;
        }


    }

})();
