'use strict';

/**
 * @ngdoc directive
 * @name mindInsuranceApp.directive:activity-tile
 * @description
 * # activity-tile
 */
angular.module('mindInsuranceApp')
  .directive('activityTile', function ($uibModal) {
    return {
      templateUrl: 'views/directives/activity-tile.html',
      restrict: 'E',
      replace: true,
      scope: {},
      bindToController: {
        step: '=',
        captionIndex: '='
      },
      controller: function() {
        var vm = this;

        switch (vm.captionIndex) {
          case 0:
            vm.caption = 'Audio Recordings';
            break;
          case 1:
            vm.caption = 'My Results';
            break;
          default:
            break;
        }

        switch (vm.step) {
          case 0:
            _.assign(vm, {
              count: 12,
              stepTitle: 'My Daily Mindfulness Practice',
              button1: {
                label: "Begin"
              },
              button2: {
                label: "View All"
              }
            })
            break;
          case 1:
            _.assign(vm, {
              count: 0,
              stepTitle: 'My SWB Score',
              button1: {
                label: "Begin"
              },
              button2: {
                label: "View Score"
              }
            })
            break;
          case 2:
            _.assign(vm, {
              count: 0,
              stepTitle: 'My Values Results',
              button1: {
                label: "Begin"
              },
              button2: {
                label: "View PDF"
              }
            })
            break;
          case 3:
            _.assign(vm, {
              count: 0,
              stepTitle: 'My Values Insights & Actions',
              button2: {
                label: "View PDF"
              }
            })
            break;
          case 4:
            _.assign(vm, {
              count: 0,
              stepTitle: 'Positive Goal Setting, Theory & Science',
              button1: {
                label: "Begin"
              },
              button2: {
                label: "Watch Again"
              }
            })
            break;
          case 5:
            _.assign(vm, {
              count: 0,
              stepTitle: 'My Goals Insights & Actions',
              button1: {
                label: "Begin"
              },
              button2: {
                label: "View PDF"
              }
            })
            break;
          default:
            break;
        }

        _.assign(vm, {
          bgImageUrl: 'assets/images/tile_icon_' + vm.step + '.png'
        });

        /* activity handlers */
        switch (vm.step) {
          case 0:
            vm.button1.onClick = function() {
              $uibModal.open({
                animation: true,
                templateUrl: 'views/modals/mindfulness-practice.html',
                controller: 'ModalMindfulnessPracticeCtrl',
                controllerAs: '$ctrl',
                windowClass: 'modal-background'
              });
            }
            break;
          case 1:
            vm.button1.onClick = function() {
              $uibModal.open({
                animation: true,
                templateUrl: 'views/modals/assessment.html',
                controller: 'ModalAssessmentCtrl',
                controllerAs: '$ctrl',
                windowClass: 'modal-background',
                resolve: {
                  step: vm.step
                }
              });
            }

            vm.button2.onClick = function() {
              $uibModal.open({
                animation: true,
                templateUrl: 'views/modals/swb-score.html',
                controller: 'ModalSWBScoreCtrl',
                controllerAs: '$ctrl',
                windowClass: 'backdrop',
                resolve: {
                }
              });
            }
            break;
          case 2:
            vm.button1.onClick = function() {
              $uibModal.open({
                animation: true,
                templateUrl: 'views/modals/assessment.html',
                controller: 'ModalAssessmentCtrl',
                controllerAs: '$ctrl',
                windowClass: 'modal-background',
                resolve: {
                  step: vm.step
                }
              });
            }
            break;
          case 4:
            vm.button1.onClick = function() {
              $uibModal.open({
                animation: true,
                templateUrl: 'views/modals/positive-goal.html',
                controller: 'ModalPositiveGoalCtrl',
                controllerAs: '$ctrl',
                windowClass: 'modal-background',
                resolve: {
                  step: vm.step
                }
              });
            }
            break;
          case 5:
            vm.button1.onClick = function() {
              $uibModal.open({
                animation: true,
                templateUrl: 'views/modals/goal-insights.html',
                controller: 'ModalGoalInsightsCtrl',
                controllerAs: '$ctrl',
                windowClass: 'modal-background',
                resolve: {
                  step: vm.step
                }
              });
            }
            break;
          default:
            break;
        }
      },
      controllerAs: 'vm'
    };
  });
