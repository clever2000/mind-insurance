'use strict';

/**
 * @ngdoc directive
 * @name mindInsuranceApp.directive:responseSelector
 * @description
 * # responseSelector
 */
angular.module('mindInsuranceApp')
  .directive('responseSelector', function () {
    return {
      templateUrl: 'views/directives/response-selector.html',
      restrict: 'E',
      replace: true,
      scope: {},
      bindToController: {
        responseSelectors: '=',
        ngModel: '='
      },
      controller: function () {
        var $ctrl = this;        
      },
      controllerAs: '$ctrl'
    };
  });
