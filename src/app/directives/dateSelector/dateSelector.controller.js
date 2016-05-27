(function () {
    'use strict';

    angular.module('siteWeather.directives')
        .controller('DateSelectorController', dateSelectorController);

    function dateSelectorController($scope, $log) {
        var vm = this;

        vm.hasPrevious = hasPrevious;
        vm.hasNext = hasNext;
        vm.selectPrevious = selectPrevious;
        vm.selectNext = selectNext;
        vm.currentDate = undefined;

        activate();

        //---------------------
        function activate() {
            $log.debug("Init dateSelectorController with dates :", vm.currentDay);
            if (vm.currentDay < 0 || vm.currentDay > 6) {
                $log.info("Invalid day param, use default one");
                vm.currentDay = 0;
            }
            vm.currentDate = moment().add(vm.currentDay, 'days').format('dddd DD/MM/YYYY');
        }

        function hasPrevious() {
            return vm.currentDay > 0;
        }

        function hasNext() {
            return vm.currentDay < 6;
        }

        function selectPrevious() {
            if (hasPrevious()) {
                vm.currentDay--;
                vm.currentDate = moment().add(vm.currentDay, 'days').format('dddd DD/MM/YYYY');
                $scope.$emit('dateSelectionEvent', vm.currentDay);
            }
        }

        function selectNext() {
            if (hasNext()) {
                vm.currentDay++;
                vm.currentDate = moment().add(vm.currentDay, 'days').format('dddd DD/MM/YYYY');
                $scope.$emit('dateSelectionEvent', vm.currentDay);
            }
        }

    }

})();
