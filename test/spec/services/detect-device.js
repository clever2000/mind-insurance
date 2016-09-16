'use strict';

describe('Service: detectDevice', function () {

  // load the service's module
  beforeEach(module('mindInsuranceApp'));

  // instantiate service
  var detectDevice;
  beforeEach(inject(function (_detectDevice_) {
    detectDevice = _detectDevice_;
  }));

  it('should do something', function () {
    expect(!!detectDevice).toBe(true);
  });

});
