'use strict';

/**
 * @ngdoc directive
 * @name mindInsuranceApp.directive:activityIndicator
 * @description
 * # activityIndicator
 */
angular.module('mindInsuranceApp')
  .directive('activityIndicator', function ($uibModal) {
    return {
      templateUrl: 'views/directives/activity-indicator.html',
      restrict: 'E',
      replace: true,
      scope: {},
      bindToController: {

      },
      controller: function () {
        var vm = this;
        var step = 1  // This should be pulled from service
        Object.assign(vm, {
          step: step,
          stepTitle: 'Subjective Wellbeing Assessment',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eisumod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eisumod tempor incididunt ut labore et dolore magna aliqua.',
        });

        vm.openWhatsThis = function () {
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'views/modals/whats-this.html',
            controller: 'ModalWhatsThisCtrl',
            controllerAs: '$ctrl',
            windowClass: 'modal-background',
            resolve: {
              step: step
            }
          });

          modalInstance.result.then(function (status) {

          }, function () {

          });
        }

        vm.openAssessment = function () {
          $uibModal.open({
            animation: true,
            templateUrl: 'views/modals/assessment.html',
            controller: 'ModalAssessmentCtrl',
            controllerAs: '$ctrl',
            windowClass: 'modal-background',
            resolve: {
              step: step
            }
          });
        }
      },
      controllerAs: 'vm'
    };
  });
