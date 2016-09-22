'use strict';

/**
 * @ngdoc directive
 * @name mindInsuranceApp.directive:hexagon
 * @description
 * # hexagon
 */
angular.module('mindInsuranceApp')
  .directive('hexagon', function () {
    return {
      templateUrl: 'views/directives/hexagon.html',
      restrict: 'E',
      replace: true,
      scope: {},
      bindToController: {
        ngModel: '=',
        ngValue: '=',
        type: '@',
        filled: '='
      },
      controller: function () {
        var vm = this;        
      },
      controllerAs: 'vm'
    };
  });
