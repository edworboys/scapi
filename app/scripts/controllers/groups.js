'use strict';

/**
 * @ngdoc function
 * @name scapiApp.controller:SoundcloudCtrl
 * @description
 * # SoundcloudCtrl
 * Controller of the scapiApp
 */
angular.module('scapiApp')
  .controller('GroupsCtrl', ['$scope', 'sc', function ($scope, sc) {

    function removeDuplicateUsers(trackArray) {
      var arrayLength = trackArray.length;
      var noRemoved = 0;
      var trackIx = 0;
      var seenUsers = [];

      while (trackIx < trackArray.length) {

        if (seenUsers.indexOf(trackArray[trackIx].user_id) < 0) {
          seenUsers.push(trackArray[trackIx].user_id);
          trackIx++;
        } else {
          trackArray.splice(trackIx, 1);
          noRemoved++;
        }
      }

      console.log('Duplicates Removed: ' +  noRemoved + "/" + arrayLength);
      return trackArray;
    }

    $scope.groupId = 49;
    $scope.groupLink = "http://soundcloud.com/groups/techno";

    $scope.getGroup = function() {
      sc.group($scope.groupId).success(function (data) {
        $scope.groupInfo = data;
        $scope.groupLink = 'http://soundcloud.com/groups/' + $scope.groupInfo.permalink;
      });

      sc.tracks($scope.groupId).success(function (data) {
        $scope.tracks = data;

      });

    };

    $scope.getGroupFromLink = function() {

      sc.groupFromLink($scope.groupLink).success(function (data) {
        $scope.groupInfo = data;
        $scope.groupId = $scope.groupInfo.id;
      });

      sc.tracksFromLink($scope.groupLink).success(function (data) {
        $scope.tracks = data;

      });
    };




    $scope.removeDuplicates = function(){
      $scope.tracks = removeDuplicateUsers($scope.tracks);
    };








  }]);
