(function () {
    angular.module('siteWeather.services')
        .factory('flyabilityService', flyabilityService);

    function flyabilityService() {

        var service = {
            getFlyability: getFlyability
        };

        var directionToDeg = {
            'N': 0,
            'NNE': 22.5,
            'NE': 45,
            'ENE': 67.5,
            'E': 90,
            'ESE': 112.5,
            'SE': 135,
            'SSE': 157.5,
            'S': 180,
            'SSW': 202.5,
            'SW': 225,
            'WSW': 247.5,
            'W': 270,
            'WNW': 292.5,
            'NW': 315,
            'NNW': 337.5,
        }

        return service;

        //-----------------------------

        function getFlyability(site, weather) {
            var flyability = {
                "hourlyForecast": {},
                "threeHoursForecast": {}
            };

            _.each(weather.hourlyForecast, function (datas, hour) {
                flyability.hourlyForecast[hour] = {direction: false, speed: false, gust: false, level: 0};
                _.each(site.takeoffs, function (takeoff) {
                    flyability.hourlyForecast[hour].direction = flyability.hourlyForecast[hour].direction ||
                        checkWindDirection(datas.windDirection, takeoff.directions.min, takeoff.directions.max);

                    flyability.hourlyForecast[hour].speed = flyability.hourlyForecast[hour].speed ||
                        checkWindSpeed(datas.windSpeed, datas.windGust, takeoff.wind.min, takeoff.wind.max);

                    flyability.hourlyForecast[hour].gust = flyability.hourlyForecast[hour].gust ||
                        checkWindGust(datas.windGust, takeoff.wind.min, takeoff.wind.max);

                });

                if (flyability.hourlyForecast[hour].direction) {
                    flyability.hourlyForecast[hour].level++;
                }

                if (flyability.hourlyForecast[hour].speed) {
                    flyability.hourlyForecast[hour].level++;
                }
            });

            _.each(weather.threeHoursForecast, function (datas, hour) {
                flyability.threeHoursForecast[hour] = {direction: false, speed: false, gust: false, level: 0};
                _.each(site.takeoffs, function (takeoff) {
                    flyability.threeHoursForecast[hour].direction = flyability.threeHoursForecast[hour].direction ||
                        checkWindDirection(datas.windDirection, takeoff.directions.min, takeoff.directions.max);

                    flyability.threeHoursForecast[hour].speed = flyability.threeHoursForecast[hour].speed ||
                        checkWindSpeed(datas.windSpeed, takeoff.wind.min, takeoff.wind.max);

                    flyability.threeHoursForecast[hour].gust = flyability.threeHoursForecast[hour].gust ||
                        checkWindGust(datas.windGust, takeoff.wind.min, takeoff.wind.max);
                });

                if (flyability.threeHoursForecast[hour].direction) {
                    flyability.threeHoursForecast[hour].level++;
                }

                if (flyability.threeHoursForecast[hour].speed) {
                    flyability.threeHoursForecast[hour].level++;
                }
            });

            console.log(flyability);

            return flyability;
        }

        function checkWindDirection(windDirValue, minDirValue, maxDirValue) {
            return directionToDeg[minDirValue] <= directionToDeg[windDirValue]
                && directionToDeg[windDirValue] <= directionToDeg[maxDirValue];
        }

        function checkWindSpeed(windSpeed, minWindValue, maxWindValue) {
            return windSpeed >= minWindValue && windSpeed <= maxWindValue;
        }

        function checkWindGust(windGust, minWindValue, maxWindValue) {
            return windGust >= minWindValue && windGust <= maxWindValue;
        }
    }
})();
