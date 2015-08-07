'use strict';

describe('Directive: follower', function () {

  // load the directive's module
  beforeEach(module('scapiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<follower></follower>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the follower directive');
  }));
});
