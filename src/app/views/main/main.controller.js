(function () {
    'use strict';

    angular.module('siteWeather.views')
        .controller('MainController', MainController);

    function MainController($scope, $log, $q, $state, $stateParams, weatherService, siteService, calendarService, flyabilityService) {
        var vm = this;

        vm.showSiteDetails = false;
        vm.showWeatherDetails = false;
        vm.toggleSiteDetails = toggleSiteDetails;
        vm.toggleWeatherDetails = toggleWeatherDetails;

        activate();

        //---------------------------

        function activate() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position){
                    console.log(position);
                    vm.userGeoPosition = position;
                });
            }

            vm.day = $state.params.day;

            if (vm.day <0 || vm.day > 6) {
                $state.go('root.day', {day: 0}, {reload: true});
                return;
            }

            $q.all([calendarService.getDates(), siteService.getSites()])
                .then(function (datas) {
                    vm.dates = datas[0];
                    $log.info("Dates => ", vm.dates);
                    vm.sites = datas[1];
                    $log.info("Sites => ", vm.sites);

                    vm.siteWeather = {};
                    vm.siteFlyability = {};

                    _.each(vm.sites, function (site) {
                        var date = moment().add($state.params.day, 'days').format('YYYYMMDD');
                        weatherService.getByDateAndLocation(date, site.coordinates.latitude, site.coordinates.longitude)
                            .then(function (weather) {
                                vm.siteWeather[site.id] = weather;
                            })
                            .then(function () {
                                vm.siteFlyability[site.id] = flyabilityService.getFlyability(site, vm.siteWeather[site.id]);
                            });
                    });

                });

            $scope.$on('dateSelectionEvent', function(event, data){
                $state.go('root.day', {day: data});

                _.each(vm.sites, function (site) {
                    var date = moment().add(data, 'days').format('YYYYMMDD');
                    weatherService.getByDateAndLocation(date, site.coordinates.latitude, site.coordinates.longitude)
                        .then(function (weather) {
                            vm.siteWeather[site.id] = weather;
                        })
                        .then(function () {
                            vm.siteFlyability[site.id] = flyabilityService.getFlyability(site, vm.siteWeather[site.id]);
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
