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



        $scope.getGroup = function() {          // IS A NUMBER (ID)

            if (!isNaN($scope.groupLink)){
                sc.group($scope.groupLink).then(function (response) {
                    $scope.groupInfo = response.data;
                }, function (rejected) {

                });

                sc.tracks($scope.groupLink).then(function (response) {
                    $scope.tracks = response.data;
                    $scope.tracks = removeDuplicateUsers($scope.tracks);
                    $scope.showUrl = 1;
                }, function (rejected) {

                });
            } else {                            // IS A STRING (URL)

                sc.groupFromLink($scope.groupLink).then(function (response) {
                        $scope.groupInfo = response.data;
                        $scope.groupLink = $scope.groupInfo.id;

                    }, function (rejected) {

                    });

                    sc.tracksFromLink($scope.groupLink).then(function (response) {
                        $scope.tracks = response.data;
                        $scope.tracks = removeDuplicateUsers($scope.tracks);
                        $scope.showUrl = 1;
                    }, function (rejected) {
                        console.log(rejected);
                    });
            }

        };

        $scope.followUsers = function() {
            console.log(sc.me);
        };




        $scope.removeDuplicates = function(){
            $scope.tracks = removeDuplicateUsers($scope.tracks);
        };








    }]);
