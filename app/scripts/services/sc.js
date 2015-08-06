'use strict';

/**
 * @ngdoc service
 * @name scapiApp.sc
 * @description
 * # sc
 * Service in the scapiApp.
 */
angular.module('scapiApp')
  .factory('sc', ['$http', function ($http) {
    var clientIdParam = '?client_id=ed3fb73ea5aafe15e1d9e013e93f7d05';

    return {
      group: function (groupId) {
        return $http.get('http://api.soundcloud.com/groups/' + groupId + clientIdParam);
      },
      tracks: function(groupId) {
        return $http.get('http://api.soundcloud.com/groups/' + groupId + "/tracks" + clientIdParam + "&limit=50" );
      },
      user: function (userId) {
        return $http.get('http://api.soundcloud.com/users/' + userId + clientIdParam);
      }

    };
  }])

