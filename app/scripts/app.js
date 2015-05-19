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
            .when('/add', {
                templateUrl: 'views/add.html',
                controller: 'AddCtrl'
            })
            .when('/all', {
                templateUrl: 'views/all.html',
                controller: 'AllCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
