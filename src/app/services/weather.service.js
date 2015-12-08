(function () {
    'use strict';

angular.module('siteWeather.services')
    .factory('weatherService', weatherService);

function weatherService() {

    var service = {
        readAll: readAll
    };

    return service;


    function readAll() {
        return [{
            "date": "2015-08-17",
            "datas": [
                {
                    "site": {
                        "_id": 1,
                        "label": "La Comté",
                        "level": 1,
                        "coordinates": {"latitude": "", "longitude": ""},
                        "beacon": {"url": "http://www.balisemeteo.com/balise.php?idBalise=166", "label": "La Comté"},
                        "takeoffs": [{
                            "label": "Ouest",
                            "directions": {"min": "WNW", "max": "W"},
                            "coordinates": {"latitude": "", "longitude": ""},
                            "wind": {"min": 17, "max": 22},
                            "camera": "http://foo.bar.com"
                        }, {
                            "label": "Nord-Ouest",
                            "directions": {"min": "NW", "max": "NW"},
                            "coordinates": {"latitude": "", "longitude": ""},
                            "wind": {"min": 17, "max": 22}
                        }],
                        "landings": [{
                            "label": "Ouest",
                            "directions": {"min": "WNW", "max": "W"},
                            "coordinates": {"latitude": "", "longitude": ""},
                            "camera": "http://foo.bar.com"
                        }],
                        "warnings": ["Attention aux moutons", "Beaware zobbie la mouche"],
                        "links": [{
                            "label": "Fédération",
                            "url": "http://federation.ffvl.fr/sites_pratique/voir/1303"
                        }, {"label": "Ligue", "url": "http://vol.libre.free.fr/b1comte.htm"}, {
                            "label": "Gestionnaire",
                            "url": "http://federation.ffvl.fr/structure/1452/sites/62010"
                        }]
                    },
                    "weather": {
                        "lastUpdateTime": "17/08/2015 09:55",
                        "date": "2015-08-17",
                        "hourlyForecast": {
                            "3": {
                                "hour": 3,
                                "weatherLabel": "Clair, quelques cirrus",
                                "temperature": 11.0,
                                "windChill": 0.0,
                                "windDirection": "NNE",
                                "windSpeed": 6.0,
                                "windGust": 15.0,
                                "precips": null
                            },
                            "4": {
                                "hour": 4,
                                "weatherLabel": "Clair, ciel sans nuage",
                                "temperature": 11.0,
                                "windChill": 0.0,
                                "windDirection": "NNW",
                                "windSpeed": 6.0,
                                "windGust": 18.0,
                                "precips": null
                            },
                            "5": {
                                "hour": 5,
                                "weatherLabel": "Clair, quelques cirrus",
                                "temperature": 11.0,
                                "windChill": 0.0,
                                "windDirection": "NNW",
                                "windSpeed": 7.0,
                                "windGust": 23.0,
                                "precips": null
                            },
                            "6": {
                                "hour": 6,
                                "weatherLabel": "Clair, quelques cirrus",
                                "temperature": 10.0,
                                "windChill": 0.0,
                                "windDirection": "NW",
                                "windSpeed": 8.0,
                                "windGust": 25.0,
                                "precips": null
                            },
                            "7": {
                                "hour": 7,
                                "weatherLabel": "Clair avec quelques nuages bas et quelques cirrus",
                                "temperature": 10.0,
                                "windChill": 0.0,
                                "windDirection": "NW",
                                "windSpeed": 8.0,
                                "windGust": 26.0,
                                "precips": null
                            },
                            "8": {
                                "hour": 8,
                                "weatherLabel": "Clair avec quelques nuages bas et quelques cirrus",
                                "temperature": 12.0,
                                "windChill": 0.0,
                                "windDirection": "NW",
                                "windSpeed": 9.0,
                                "windGust": 25.0,
                                "precips": null
                            },
                            "9": {
                                "hour": 9,
                                "weatherLabel": "Clair avec quelques nuages bas et quelques cirrus",
                                "temperature": 15.0,
                                "windChill": 0.0,
                                "windDirection": "NNW",
                                "windSpeed": 13.0,
                                "windGust": 21.0,
                                "precips": null
                            },
                            "10": {
                                "hour": 10,
                                "weatherLabel": "Clair avec quelques nuages bas et quelques cirrus",
                                "temperature": 16.0,
                                "windChill": 0.0,
                                "windDirection": "N",
                                "windSpeed": 17.0,
                                "windGust": 19.0,
                                "precips": null
                            },
                            "11": {
                                "hour": 11,
                                "weatherLabel": "Clair mais brumeux",
                                "temperature": 17.0,
                                "windChill": 0.0,
                                "windDirection": "N",
                                "windSpeed": 17.0,
                                "windGust": 20.0,
                                "precips": null
                            },
                            "12": {
                                "hour": 12,
                                "weatherLabel": "Très nuageux et cirrus isolés",
                                "temperature": 17.0,
                                "windChill": 0.0,
                                "windDirection": "N",
                                "windSpeed": 18.0,
                                "windGust": 19.0,
                                "precips": null
                            },
                            "13": {
                                "hour": 13,
                                "weatherLabel": "Très nuageux et cirrus isolés",
                                "temperature": 17.0,
                                "windChill": 0.0,
                                "windDirection": "N",
                                "windSpeed": 19.0,
                                "windGust": 20.0,
                                "precips": null
                            },
                            "14": {
                                "hour": 14,
                                "weatherLabel": "Partiellement nuageux et quelques cirrus",
                                "temperature": 17.0,
                                "windChill": 0.0,
                                "windDirection": "N",
                                "windSpeed": 19.0,
                                "windGust": 20.0,
                                "precips": null
                            },
                            "15": {
                                "hour": 15,
                                "weatherLabel": "Très nuageux et cirrus isolés",
                                "temperature": 17.0,
                                "windChill": 0.0,
                                "windDirection": "N",
                                "windSpeed": 18.0,
                                "windGust": 21.0,
                                "precips": null
                            },
                            "16": {
                                "hour": 16,
                                "weatherLabel": "Ciel couvert",
                                "temperature": 17.0,
                                "windChill": 0.0,
                                "windDirection": "N",
                                "windSpeed": 16.0,
                                "windGust": 18.0,
                                "precips": null
                            },
                            "17": {
                                "hour": 17,
                                "weatherLabel": "Ciel couvert",
                                "temperature": 17.0,
                                "windChill": 0.0,
                                "windDirection": "N",
                                "windSpeed": 17.0,
                                "windGust": 21.0,
                                "precips": null
                            },
                            "18": {
                                "hour": 18,
                                "weatherLabel": "Ciel couvert",
                                "temperature": 17.0,
                                "windChill": 0.0,
                                "windDirection": "N",
                                "windSpeed": 18.0,
                                "windGust": 22.0,
                                "precips": null
                            },
                            "19": {
                                "hour": 19,
                                "weatherLabel": "Ciel couvert",
                                "temperature": 17.0,
                                "windChill": 0.0,
                                "windDirection": "NNE",
                                "windSpeed": 18.0,
                                "windGust": 21.0,
                                "precips": null
                            },
                            "20": {
                                "hour": 20,
                                "weatherLabel": "Ciel couvert",
                                "temperature": 16.0,
                                "windChill": 0.0,
                                "windDirection": "NNE",
                                "windSpeed": 16.0,
                                "windGust": 22.0,
                                "precips": null
                            },
                            "21": {
                                "hour": 21,
                                "weatherLabel": "Ciel couvert",
                                "temperature": 14.0,
                                "windChill": 0.0,
                                "windDirection": "N",
                                "windSpeed": 10.0,
                                "windGust": 20.0,
                                "precips": null
                            },
                            "22": {
                                "hour": 22,
                                "weatherLabel": "Ciel couvert",
                                "temperature": 13.0,
                                "windChill": 0.0,
                                "windDirection": "N",
                                "windSpeed": 7.0,
                                "windGust": 20.0,
                                "precips": null
                            },
                            "23": {
                                "hour": 23,
                                "weatherLabel": "Ciel couvert",
                                "temperature": 13.0,
                                "windChill": 0.0,
                                "windDirection": "NNW",
                                "windSpeed": 5.0,
                                "windGust": 17.0,
                                "precips": null
                            }
                        },
                        "threeHoursForecast": {
                            "17": {
                                "hour": 17,
                                "weatherLabel": "Ciel couvert",
                                "temperature": 17.0,
                                "windChill": 14.0,
                                "windDirection": "N",
                                "windSpeed": 17.0,
                                "windGust": 21.0,
                                "precips": "-"
                            },
                            "20": {
                                "hour": 20,
                                "weatherLabel": "Ciel couvert",
                                "temperature": 16.0,
                                "windChill": 12.0,
                                "windDirection": "NNE",
                                "windSpeed": 16.0,
                                "windGust": 22.0,
                                "precips": "-"
                            },
                            "5": {
                                "hour": 5,
                                "weatherLabel": "Clair, quelques cirrus",
                                "temperature": 11.0,
                                "windChill": 9.0,
                                "windDirection": "NNW",
                                "windSpeed": 7.0,
                                "windGust": 23.0,
                                "precips": "-"
                            },
                            "23": {
                                "hour": 23,
                                "weatherLabel": "Ciel couvert",
                                "temperature": 13.0,
                                "windChill": 12.0,
                                "windDirection": "NNW",
                                "windSpeed": 5.0,
                                "windGust": 17.0,
                                "precips": "-"
                            },
                            "8": {
                                "hour": 8,
                                "weatherLabel": "Clair avec quelques nuages bas et quelques cirrus",
                                "temperature": 12.0,
                                "windChill": 10.0,
                                "windDirection": "NW",
                                "windSpeed": 9.0,
                                "windGust": 25.0,
                                "precips": "-"
                            },
                            "11": {
                                "hour": 11,
                                "weatherLabel": "Clair mais brumeux",
                                "temperature": 17.0,
                                "windChill": 13.0,
                                "windDirection": "N",
                                "windSpeed": 17.0,
                                "windGust": 20.0,
                                "precips": "-"
                            },
                            "14": {
                                "hour": 14,
                                "weatherLabel": "Partiellement nuageux et quelques cirrus",
                                "temperature": 17.0,
                                "windChill": 14.0,
                                "windDirection": "N",
                                "windSpeed": 19.0,
                                "windGust": 20.0,
                                "precips": "-"
                            }
                        },
                        "sunnyHours": 4,
                        "sunrise": "06:44",
                        "sunset": "21:03",
                        "pressure": "1016"
                    },
                    "flyability": {
                        "11": {"windSpeed": "stronger", "windDirection": "ok"},
                        "14": {"windSpeed": "good", "windDirection": "ko"},
                        "17": {"windSpeed": "lighter", "windDirection": "ok"}
                    }
                }]
        }];
    }
}
})();
