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
        step: '='
      },
      controller: function() {
        var vm = this;
        switch (vm.step) {
          case 1:
            Object.assign(vm, {
              count: 12,
              stepTitle: 'My Daily Mindfulness Practice'
            })
            break;
          case 2:
            Object.assign(vm, {
              count: 0,
              stepTitle: 'Subjective Wellbeing Assessment'
            })
            break;
          case 3:
            Object.assign(vm, {
              count: 0,
              stepTitle: 'My Goals Insights & Actions'
            })
            break;
          case 4:
            Object.assign(vm, {
              count: 0,
              stepTitle: 'Positive Goal Setting, Theory & Science'
            })
            break;
          default:
            Object.assign(vm, {
              count: 12,
              stepTitle: 'My Daily Mindfulness'
            })
            break;
        }

        Object.assign(vm, {
          bgImageUrl: 'assets/images/tile_bg_' + vm.step + '.jpg'
        });

        if (vm.step === 1 || vm.step === 2 || vm.step === 3) { // placeholder
          vm.button1 = {
            label: "Whats this?",
            onClick: function() {
              console.log ("Whats this")
            }
          }
          vm.button2 = {
            label: "Begin",
            onClick: function() {
              console.log ("Begin")
            }
          }

          if (vm.step === 2) {
            vm.button2.onClick = function() {
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
          }
        }
        else {
          vm.button1 = {
            label: "View All",
            onClick: function() {
              console.log ("View All")
            }
          }
        }
      },
      controllerAs: 'vm'
    };
  });
