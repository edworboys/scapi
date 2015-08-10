'use strict';

/**
 * @ngdoc service
 * @name scapiApp.sc
 * @description
 * # sc
 * Service in the scapiApp.
 */
angular.module('scapiApp')
  .factory('sc', ['$http', '$q', function ($http, $q) {
    var clientIdParam = '?client_id=ed3fb73ea5aafe15e1d9e013e93f7d05';
    var clientIdParamAnd = '&client_id=ed3fb73ea5aafe15e1d9e013e93f7d05';

    var service = {
      group: function (groupId) {
        return $http.get('http://api.soundcloud.com/groups/' + groupId + clientIdParam);
      },
      tracks: function(groupId) {
        return $http.get('http://api.soundcloud.com/groups/' + groupId + "/tracks" + clientIdParam + "&limit=100" );
      },
      me: function () {
        return $http.get('http://api.soundcloud.com/me/' + clientIdParam + '&oauth_token=' + SC.accessToken());
      },
      groupFromLink:  function (groupLink) {
        var resolvedLink = 'http://api.soundcloud.com/resolve?url=' + groupLink + clientIdParamAnd;
        return $http.get(resolvedLink);
      },
      tracksFromLink:  function (groupLink) {
        var deferred = $q.defer();
        var resolvedLink = 'http://api.soundcloud.com/resolve?url=' + groupLink + clientIdParamAnd;

        $http.get(resolvedLink).then(function (response){


          service.tracks(response.data.id).then(function (response) {
            deferred.resolve(response.data);
          }, function(response) {
            deferred.reject(response);
          });
1
        }, function(response) {
          deferred.reject(response);
        });

        return deferred.promise;

      },
      userFollowers: function(userId) {
        console.log($http.get('http://api.soundcloud.com/users/' + userId + '/followers' + clientIdParam + "&limit=50" + "&linked_partitioning=1"));
        return $http.get('http://api.soundcloud.com/users/' + userId + '/followers' + clientIdParam + "&limit=50" + "&linked_partitioning=1");
      },

      getNextPage: function(next_href){
        return $http.get(next_href);
      }
    };

    return service;
  }]);

