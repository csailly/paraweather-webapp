(function () {
    'use strict';

    angular.module('siteWeather.services')
        .factory('siteApiService', siteApiService);

    function siteApiService($q) {

        var service = {
            getSites: getSites
        };

        return service;

        //-----------------------------------

        function getSites() {
            return $q.when([{
                    "id": 1,
                    "label": "La Comté",
                    "level": 1,
                    "coordinates": {
                        "latitude": "50.416804",
                        "longitude": "2.513119"
                    },
                    "beacon": {
                        "url": "http://www.balisemeteo.com/balise.php?idBalise=166",
                        "label": "La Comté"
                    },
                    "park": {
                        "coordinates": {
                            "latitude": " 50.415904",
                            "longitude": "2.511599"
                        }
                    },
                    "takeoffs": [
                        {
                            "label": "Ouest",
                            "directions": {
                                "min": "W",
                                "max": "WNW"
                            },
                            "coordinates": {
                                "latitude": "50.416804",
                                "longitude": "2.513119"
                            },
                            "wind": {
                                "min": 13,
                                "max": 25
                            },
                            "camera": "http://foo.bar.com"
                        },
                        {
                            "label": "Nord-Ouest",
                            "directions": {
                                "min": "NW",
                                "max": "NW"
                            },
                            "coordinates": {
                                "latitude": "50.417486",
                                "longitude": "2.513862"
                            },
                            "wind": {
                                "min": 13,
                                "max": 25
                            }
                        }
                    ],
                    "landings": [
                        {
                            "label": "Ouest",
                            "directions": {
                                "min": "WNW",
                                "max": "W"
                            },
                            "coordinates": {
                                "latitude": "50.416733",
                                "longitude": "2.511892"
                            },
                            "camera": "http://foo.bar.com"
                        }
                    ],
                    "warnings": [
                        "Attention aux moutons",
                        "Beaware zobbie la mouche"
                    ],
                    "links": [
                        {
                            "label": "Fédération",
                            "url": "http://federation.ffvl.fr/sites_pratique/voir/1303"
                        },
                        {
                            "label": "Ligue",
                            "url": "http://vol.libre.free.fr/b1comte.htm"
                        },
                        {
                            "label": "Gestionnaire",
                            "url": "http://federation.ffvl.fr/structure/1452"
                        }
                    ]
                },
                    {
                        "id": 2,
                        "label": "Olhain",
                        "level": 1,
                        "coordinates": {
                            "latitude": "50.433433",
                            "longitude": "2.585734"
                        },
                        "beacon": {
                            "url": "",
                            "label": ""
                        },
                        "takeoffs": [
                            {
                                "label": "Sud",
                                "directions": {
                                    "min": "S",
                                    "max": "SSW"
                                },
                                "coordinates": {
                                    "latitude": "50.433433",
                                    "longitude": "2.585734"
                                },
                                "wind": {
                                    "min": 13,
                                    "max": 23
                                },
                                "camera": "http://foo.bar.com"
                            }
                        ],
                        "landings": [
                            {
                                "label": "Sud",
                                "directions": {
                                    "min": "S",
                                    "max": "SSW"
                                },
                                "coordinates": {
                                    "latitude": "50.432170",
                                    "longitude": "2.585635"
                                },
                                "camera": "http://foo.bar.com"
                            }
                        ],
                        "warnings": [
                            "Attention aux moutons",
                            "Beaware zobbie la mouche"
                        ],
                        "links": [
                            {
                                "label": "Fédération",
                                "url": "http://federation.ffvl.fr/sites_pratique/voir/486"
                            },
                            {
                                "label": "Ligue",
                                "url": "http://vol.libre.free.fr/b1olhain.htm"
                            },
                            {
                                "label": "Gestionnaire",
                                "url": "http://federation.ffvl.fr/structure/777"
                            }
                        ]
                    }]
            );
        }
    }
})
();
