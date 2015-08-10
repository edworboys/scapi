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

        sc.me().then(function (response) {
          $scope.me = response.data;
          console.log($scope.me);

          sc.userFollowers($scope.me.id).then(function (response) {
            $scope.followers = response.data;

          },
            function(rejection){

            });

        },
          function(rejection){

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

