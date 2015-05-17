'use strict';

/**
 * @ngdoc function
 * @name restaurantPickerUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the restaurantPickerUiApp
 */
angular.module('restaurantPickerUiApp')
    .controller('MainCtrl', function ($scope, $http, appConfig) {

        var restaurantServiceUrl = appConfig.url;

        $scope.allRestaurants;

        $scope.randomize = function () {

            $http({method: 'GET', url: restaurantServiceUrl + 'random', withCredentials: false})
                .success(function(response){
                    console.log('Retreived random restaurant: ');
                    console.log(response);
                    $scope.randomRestaurant = response;
                })
                .error(function(error){
                    console.log('Error retreiving random restaurant: ' + error);
                });
        };

        $scope.listAll = function() {

            $http({method: 'GET', url: restaurantServiceUrl, withCredentials: false})
                .success(function(response){
                    console.log('Retreived all restaurants: ' + response);
                    $scope.allRestaurants = response;
                })
                .error(function(error){
                    console.log('Error retreiving a list of all restaurants: ' + error);
                });
        };
    });
