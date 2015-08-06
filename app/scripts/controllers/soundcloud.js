'use strict';

/**
 * @ngdoc function
 * @name scapiApp.controller:SoundcloudCtrl
 * @description
 * # SoundcloudCtrl
 * Controller of the scapiApp
 */
angular.module('scapiApp')
  .controller('SoundcloudCtrl', ['$scope', 'sc', function ($scope, sc, groupTracks) {

    $scope.groupId = 49;

    $scope.getGroup = function() {
      sc.group($scope.groupId).success(function (data) {
        $scope.groupInfo = data;
      });

      sc.tracks($scope.groupId).success(function (data) {
        $scope.tracks = data;

      });

    }


  }]);
