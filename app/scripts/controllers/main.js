'use strict';

/**
 * @ngdoc function
 * @name scapiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scapiApp
 */
angular.module('scapiApp')
  .controller('MainCtrl', ['$scope', 'sc', function ($scope, sc) {

    $scope.scConnect = function() {
      SC.connect(function () {

        sc.me().success(function (data) {
          $scope.me = data;
          console.log($scope.me);

          sc.userFollowers($scope.me.id).success(function (data) {
            $scope.followers = data;

          });
        });
      });
    };

    $scope.amILoggedIn = function () {
      sc.me().success(function (data) {
        $scope.me = data;
        console.log($scope.me);
      });
    };




  }]);

