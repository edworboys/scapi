'use strict';

describe('Controller: FollowersCtrl', function () {

  // load the controller's module
  beforeEach(module('scapiApp'));

  var FollowersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FollowersCtrl = $controller('FollowersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
