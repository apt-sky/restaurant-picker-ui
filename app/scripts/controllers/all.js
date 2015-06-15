'use strict';

angular.module('restaurantPickerUiApp')
    .controller('AllCtrl', function ($scope, $http, appConfig, $rootScope, $filter) {

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

        $scope.deleteRestaurant = function(restaurantName) {

            console.log('Delete restaurant with name:' + restaurantName);
            var oneRestaurant = $filter('filter')($scope.restaurants, {name: restaurantName})[0];

            console.log('ID of restaurant to be deleted:' + oneRestaurant._id);

            $http({method: 'DELETE', url:restaurantServiceUrl + oneRestaurant._id})
                .success(function(response){
                    console.log('Deleted restaurant with ID: '+ oneRestaurant._id);
                    $scope.getAllRestaurants();
                })
                .error(function(error){
                    console.log('Error deleting restaurant:' + error);
                });
        };
    });
