'use strict';

/**
 * @ngdoc directive
 * @name mindInsuranceApp.directive:upgrade
 * @description
 * # upgrade
 */
angular.module('mindInsuranceApp')
  .directive('upgradeBanner', function ($uibModal) {
    return {
      templateUrl: 'views/directives/upgrade-banner.html',
      restrict: 'E',
      replace: true,
      scope: {},
      bindToController: {

      },
      controller: function () {
        var vm = this;
        
      },
      controllerAs: 'vm'
    };
  });
