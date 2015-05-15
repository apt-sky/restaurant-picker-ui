'use strict';

angular.module('restaurantPickerUiApp')
    .controller('AddCtrl', function ($scope, $http, appConfig) {

        var restaurantServiceUrl = appConfig.url;

        $scope.restaurantInfoModel = {};
        var restaurant = {
            _id: 'sampleId',
            name: 'sampleName'
        };

        $scope.result;

        $scope.addRestaurant = function () {

            restaurant._id = $scope.restaurantInfoModel.name.replace(/\s+/g, '').replace(/[^\w\s]/gi, '').toLowerCase();
            restaurant.name = $scope.restaurantInfoModel.name;

            console.log('Adding restaurant with id: ' + restaurant._id + ' and name: ' + restaurant.name);

            $http({method: 'POST', url: restaurantServiceUrl, data: restaurant, withCredentials: false})
                .success(function () {
                    console.log('Successfully added Restaurant: ');
                    console.log(restaurant);
                    $scope.result = 'Success! :)';
                })
                .error(function (error) {
                    console.log('Error adding Restaurant id: %s and name: %s with error: %j', restaurant._id, restaurant.name, error);
                    $scope.result = 'Failure :(';
                });
        };
    });
