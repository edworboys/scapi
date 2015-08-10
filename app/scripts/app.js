'use strict';

/**
 * @ngdoc overview
 * @name scapiApp
 * @description
 * # scapiApp
 *
 * Main module of the application.
 */
angular
  .module('scapiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsCtrl',
        controllerAs: 'groups'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
