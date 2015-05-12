'use strict';

angular.module('restaurantPickerUiApp')
    .controller('AddCtrl', function ($scope, $http) {

        var restaurantServiceUrl = 'http://0.0.0.0:3000/restaurants/';

        $scope.restaurantInfoModel = {};
        var restaurant = {
            _id: 'sampleId',
            name: 'sampleName'
        };

        $scope.result;

        $scope.addRestaurant = function () {

            restaurant._id = $scope.restaurantInfoModel.name.replace(/\s+/g, '');
            restaurant.name = $scope.restaurantInfoModel.name;

            $http({method: 'POST', url: restaurantServiceUrl, data: restaurant, withCredentials: false})
                .success(function () {
                    console.log('Successfully added Restaurant: ' + restaurant);
                    $scope.result = 'Success! :)';
                })
                .error(function (error) {
                    console.log('Error adding Restaurant: ' + restaurant + 'with error: ' + error);
                    $scope.result = 'Failure :(';
                });
        };
    });
