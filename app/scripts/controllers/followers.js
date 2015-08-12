'use strict';

/**
 * @ngdoc function
 * @name scapiApp.controller:FollowersCtrl
 * @description
 * # FollowersCtrl
 * Controller of the scapiApp
 */
angular.module('scapiApp')
    .controller('FollowersCtrl', ['$scope', 'sc', function ($scope, sc) {

        $scope.getMyFollowers = function() {
            console.log('button pressed');
            sc.me().then(function (response) {
                $scope.me = response.data;
                sc.userFollowers($scope.me.id).then(function (response){
                    $scope.followers = response.data;
                    console.log($scope.followers);
                }, function (rejected){

                });
            }, function (rejected) {

            });
        }
    }]);
