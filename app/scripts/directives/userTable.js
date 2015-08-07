'use strict';

/**
 * @ngdoc directive
 * @name scapiApp.directive:follower
 * @description
 * # follower
 */
angular.module('scapiApp')
  .directive('userTable', function () {
    return {
      restrict: 'E',
      scope: {
        users: '='
      },
      templateUrl: 'views/userTable.html',
      link: function postLink(scope, element, attrs) {
        scope.hello = function(name) {
          alert('hello ' + name)
        };
      }
    };
  });
