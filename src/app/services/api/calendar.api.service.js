(function(){
  'use strict';

  angular.module('siteWeather.services')
      .factory('calendarApiService', calendarApiService);


      function calendarApiService() {

          var service = {
              getDates: getDates
          };

          return service;

          //-----------------------------------

          function getDates(){
            return {
              "0" : "18/05/2016",
              "1" : "19/05/2016",
              "2" : "20/05/2016",
              "3" : "21/05/2016",
              "4" : "22/05/2016",
              "5" : "23/05/2016",
              "6" : "24/05/2016",
            }
          }
        }

})();
