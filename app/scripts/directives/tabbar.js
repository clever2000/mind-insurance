'use strict';

/**
 * @ngdoc directive
 * @name mindInsuranceApp.directive:tabbar
 * @description
 * # tabbar
 */
angular.module('mindInsuranceApp')
  .directive('tabbar', function () {
    return {
      templateUrl: 'views/directives/tabbar.html',
      restrict: 'E',
      scope: {
        viewport: '@'
      },
      link: function (scope, element, attrs) {
        scope.uiStates = ['main.happinessLab', 'main.profile', 'main.upgrade'];
        scope.classNames= ['happiness-lab', 'profile', 'upgrade'];

        if (scope.viewport === 'xs') {
          scope.tabLabels = ['Happiness Lab', 'Profile', 'Upgrade'];
        }
        else {
          scope.tabLabels = ['My Happiness Lab', 'My Profile', 'Upgrade'];
        }
      }
    };
  });
