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
      replace: true,
      scope: {
        viewport: '@'
      },
      link: function (scope, element, attrs) {
        scope.uiStates = ['main.happinessLab', 'main.profile', 'main.upgrade', 'main.help', 'main.community'];
        scope.classNames= ['happiness-lab', 'profile', 'upgrade', 'help', 'community'];

        if (scope.viewport === 'xs') {
          scope.tabLabels = ['Happiness Lab', 'Profile', 'Upgrade', 'Help Us', 'Community'];
        }
        else {
          scope.tabLabels = ['My Happiness Lab', 'My Profile', 'Upgrade', 'Help Us', 'Community'];
        }
      }
    };
  });
