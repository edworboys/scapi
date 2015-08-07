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
    var clientIdParamAnd = '&client_id=ed3fb73ea5aafe15e1d9e013e93f7d05';

    return {
      group: function (groupId) {
        return $http.get('http://api.soundcloud.com/groups/' + groupId + clientIdParam);
      },
      tracks: function(groupId) {
        return $http.get('http://api.soundcloud.com/groups/' + groupId + "/tracks" + clientIdParam + "&limit=200" );
      },
      me: function () {
        return $http.get('http://api.soundcloud.com/me/' + clientIdParam + '&oauth_token=' + SC.accessToken());
      },
      groupFromLink:  function (groupLink) {
        var resolvedLink = 'http://api.soundcloud.com/resolve?url=' + groupLink + clientIdParamAnd;
        return $http.get(resolvedLink);
      },
      tracksFromLink:  function (groupLink) {
        var resolvedLink = 'http://api.soundcloud.com/resolve?url=' + groupLink + "/tracks" + clientIdParamAnd;
        return $http.get(resolvedLink);
      }//,
      /*login: function () {
        return $
      }*/
    };
  }]);

