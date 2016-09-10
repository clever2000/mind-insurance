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

        switch (vm.step) {
          case 1:
            Object.assign(vm, {
              count: 12,
              stepTitle: 'My Daily Mindfulness',
              buttonLabel: 'View All'
            })
            break;
          case 2:
            Object.assign(vm, {
              count: 0,
              stepTitle: 'Subjective Wellbeing Assessment',
              buttonLabel: 'View All'
            })
            break;
          case 3:
            Object.assign(vm, {
              count: 0,
              stepTitle: 'My Goals Insights & Actions',
              buttonLabel: 'View All'
            })
            break;
          case 4:
            Object.assign(vm, {
              count: 0,
              stepTitle: 'Positive Goal Setting, Theory & Science',
              buttonLabel: 'View All'
            })
            break;
          default:
            break;
        }

        Object.assign(vm, {
          bgImageUrl: 'assets/images/tile_bg_' + vm.step + '.jpg'
        });
      },
      controllerAs: 'vm'
    };
  });
