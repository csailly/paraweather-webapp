(function () {
    'use strict';

    angular.module('siteWeather.views')
        .controller('MainController', MainController);

    function MainController($rootScope, $state, $log, weatherService) {
        var vm = this;

        vm.datas;

        activate();

        function activate(){
            vm.datas = weatherService.readAll();
        }


    }

})();
