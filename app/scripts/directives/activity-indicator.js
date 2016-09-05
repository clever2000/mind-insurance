'use strict';

/**
 * @ngdoc directive
 * @name mindInsuranceApp.directive:activityIndicator
 * @description
 * # activityIndicator
 */
angular.module('mindInsuranceApp')
  .directive('activityIndicator', function () {
    return {
      templateUrl: 'views/activity-indicator.html',
      restrict: 'E',
      scope: {
      },
      link: function (scope, element, attrs) {
        var step = 1  // This should be pulled from service
        Object.assign(scope, {
          step: step,
          stepTitle: 'Values Assessment',
        });
      }
    };
  });
