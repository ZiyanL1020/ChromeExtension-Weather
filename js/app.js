angular.module('myApp',['ngRoute', 'myApp.controllers', 'myApp.services'])

.config(function(WeatherProvider){
        WeatherProvider.setApiKey('f7d8938acded870d');
    })

.config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'MainController'
            })
            .when('/settings', {
                templateUrl: 'templates/settings.html',
                controller: 'SettingsController'
            })
            .otherwise({redirectTo: '/'})
    })