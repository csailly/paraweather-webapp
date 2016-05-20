(function(){
    'use strict';

    angular.module('siteWeather.directives')
        .controller('siteCardController', siteCardController);

    function siteCardController($log){
        var vm = this;
        vm.toggleSiteDetails = toggleSiteDetails;
        vm.toggleWeatherDetails = toggleWeatherDetails;
        vm.showSiteDetails = false;
        vm.showWeatherDetails = false;

        activate();

        //--------------------------
        function activate(){
            $log.debug("Init siteCard with ", vm.siteDatas, vm.weatherDatas)
        }

        function toggleSiteDetails(){
            vm.showSiteDetails = !vm.showSiteDetails;
        }

        function toggleWeatherDetails(){
            vm.showWeatherDetails = !vm.showWeatherDetails;
        }

    }

})();
