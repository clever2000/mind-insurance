'use strict';

/**
 * @ngdoc service
 * @name mindInsuranceApp.detectDevice
 * @description
 * # detectDevice
 * Service in the mindInsuranceApp.
 */
angular.module('mindInsuranceApp')
  .service('detectDevice', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var device = {isPhone: false};

    if ($(window).width() < 768) {
      device = {isPhone: true};
    }

    return device;
  });
