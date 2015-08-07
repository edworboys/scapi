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
        SC.get('/me', function (me) {
          alert('Hello, ' + me.username);
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

