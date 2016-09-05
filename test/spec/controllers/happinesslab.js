'use strict';

describe('Controller: HappinesslabCtrl', function () {

  // load the controller's module
  beforeEach(module('mindInsuranceApp'));

  var HappinesslabCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HappinesslabCtrl = $controller('HappinesslabCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HappinesslabCtrl.awesomeThings.length).toBe(3);
  });
});
