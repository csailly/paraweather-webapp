angular.module('siteWeather.config')
.config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl("/");
    RestangularProvider.setDefaultHttpFields({cache: true});
});