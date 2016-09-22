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
    return {
      isPhone: function() {
        return $(window).width() < 768;
      }
    };
  });
