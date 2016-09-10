'use strict';

/**
 * @ngdoc directive
 * @name mindInsuranceApp.directive:activity-tile
 * @description
 * # activity-tile
 */
angular.module('mindInsuranceApp')
  .directive('activityTile', function () {
    return {
      templateUrl: 'views/directives/activity-tile.html',
      restrict: 'E',
      replace: true,
      bindToController: {
        step: '='
      },
      controller: function() {
        var vm = this;

        Object.assign(vm, {
          count: 8,
          stepTitle: 'My Daily Mindfulness',
          buttonLabel: 'View All'
        })
      },
      controllerAs: 'vm'
    };
  });
