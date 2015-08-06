'use strict';

/**
 * @ngdoc function
 * @name scapiApp.controller:SoundcloudCtrl
 * @description
 * # SoundcloudCtrl
 * Controller of the scapiApp
 */
angular.module('scapiApp')
  .controller('SoundcloudCtrl', ['$scope', 'sc', function ($scope, sc) {
    sc.success(function(data) {
      $scope.groupInfo = data;
    });
  }]);
