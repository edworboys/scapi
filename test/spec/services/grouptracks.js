'use strict';

describe('Service: groupTracks', function () {

  // load the service's module
  beforeEach(module('scapiApp'));

  // instantiate service
  var groupTracks;
  beforeEach(inject(function (_groupTracks_) {
    groupTracks = _groupTracks_;
  }));

  it('should do something', function () {
    expect(!!groupTracks).toBe(true);
  });

});
