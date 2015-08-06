'use strict';

/**
 * @ngdoc service
 * @name scapiApp.sc
 * @description
 * # sc
 * Service in the scapiApp.
 */
angular.module('scapiApp')
  .service('groupTracks', ['$http', function ($http) {
    return $http.get('http://api.soundcloud.com/groups/49/tracks?client_id=ed3fb73ea5aafe15e1d9e013e93f7d05')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
    // AngularJS will instantiate a singleton by calling "new" on this function
  }]);
