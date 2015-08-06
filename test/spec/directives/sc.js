'use strict';

describe('Directive: sc', function () {

  // load the directive's module
  beforeEach(module('scapiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sc></sc>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sc directive');
  }));
});
