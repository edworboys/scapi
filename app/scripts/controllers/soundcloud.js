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
        $scope.notDuplicates = removeDuplicateUsers(angular.copy(data));

      });

    }

   function removeDuplicateUsers(trackArray){
    var arrayLength = trackArray.length;
    var noRemoved = 0;
    var trackIx = 0;
    var seenUsers = [];

     while(trackIx < trackArray.length){

        if(seenUsers.indexOf(trackArray[trackIx].user_id) < 0) {
          seenUsers.push(trackArray[trackIx].user_id);
          trackIx++;
        }else{
          trackArray.splice(trackIx, 1);
          noRemoved++;
        }
     }

     console.log('Duplicates Removed: ' +  noRemoved + "/" + arrayLength);
     return trackArray;
    }

  }]);
