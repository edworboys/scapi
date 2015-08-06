'use strict';

describe('Service: sc', function () {

  // load the service's module
  beforeEach(module('scapiApp'));

  // instantiate service
  var sc;
  beforeEach(inject(function (_sc_) {
    sc = _sc_;
  }));

  it('should do something', function () {
    expect(!!sc).toBe(true);
  });

});
