'use strict';

angular.module('restaurantPickerUiApp')
    .controller('AllCtrl', function ($scope, $http, appConfig, $rootScope) {

        $rootScope.currentTab = 'all';
        $scope.restaurants;

        var restaurantServiceUrl = appConfig.url;

        $scope.getAllRestaurants = function() {

            $http({method: 'GET', url: restaurantServiceUrl, withCredentials: false})
                .success(function(response){
                    console.log('Retreived all restaurants');
                    console.log(response);
                    $scope.restaurants = response;
                })
                .error(function(error){
                    console.log('Error retreiving all restaurants: ' + error);
                });
        };
    });
