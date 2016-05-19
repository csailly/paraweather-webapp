(function () {
    'use strict';

    angular.module('siteWeather.views')
        .controller('dateSelectorController', dateSelectorController);

    function dateSelectorController($log) {
        var vm = this;

        vm.hasPrevious = hasPrevious;
        vm.hasNext = hasNext;
        vm.selectPrevious = selectPrevious;
        vm.selectNext = selectNext;
        vm.currentDate = undefined;

        var currentDateIdx = 0;

        activate();

        //---------------------
        function activate() {
            $log.debug("Init dateSelectorController with dates :", vm.dates);
            vm.currentDate = vm.dates[currentDateIdx] || '';
        }

        function hasPrevious() {
            return vm.dates[currentDateIdx - 1];
        }

        function hasNext() {
            return vm.dates[currentDateIdx + 1];
        }

        function selectPrevious() {
            if(hasPrevious()){
                vm.currentDate = vm.dates[--currentDateIdx];
            }
        }

        function selectNext() {
            if(hasNext()){
                vm.currentDate = vm.dates[++currentDateIdx];
            }
        }
    }

})();
