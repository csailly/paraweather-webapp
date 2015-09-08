angular.module('siteWeather.main')
.controller('MainController', function($rootScope, $state, $log, weather){
	var vm = this;
	
	vm.datas  =	weather.readAll();
});