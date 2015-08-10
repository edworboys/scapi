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
      sc.group($scope.groupId).then(function (resolved) {
        $scope.groupInfo = resolved;
        $scope.groupLink = 'http://soundcloud.com/groups/' + $scope.groupInfo.permalink;
      },
        function (rejected) {

        });

      sc.tracks($scope.groupId).then(function (data) {
        $scope.tracks = data;
        $scope.tracks = removeDuplicateUsers($scope.tracks);
      },
        function (rejected) {


        });

    };

    $scope.getGroupFromLink = function() {

      sc.groupFromLink($scope.groupLink).then(function (data) {
        $scope.groupInfo = data;
        $scope.groupId = $scope.groupInfo.id;
      },
        function (rejected) {

        });


      sc.tracksFromLink($scope.groupLink).then(function (resolved) {
        $scope.tracks = resolved;
        $scope.tracks = removeDuplicateUsers($scope.tracks);

      }, function (rejected) {

      });

    };




    $scope.removeDuplicates = function(){
      $scope.tracks = removeDuplicateUsers($scope.tracks);
    };








  }]);
