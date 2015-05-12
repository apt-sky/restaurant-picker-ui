'use strict';

/**
 * @ngdoc overview
 * @name restaurantPickerUiApp
 * @description
 * # restaurantPickerUiApp
 *
 * Main module of the application.
 */
angular
    .module('restaurantPickerUiApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/add', {
                templateUrl: 'views/add.html',
                controller: 'AboutCtrl'
            })
            .when('/all', {
                templateUrl: 'views/all.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
