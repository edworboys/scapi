'use strict';

/**
 * @ngdoc directive
 * @name scapiApp.directive:sc
 * @description
 * # sc
 */
angular.module('scapiApp')
  .directive('sc', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the sc directive');
      }
    };
  });
