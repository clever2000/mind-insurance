'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:ModalGoalInsightsCtrl
 * @description
 * # ModalGoalInsightsCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('ModalGoalInsightsCtrl', function($uibModalInstance, $uibModal, RestService, detectDevice, step) {
    var $ctrl = this;
    $ctrl.intro = false; // in mobile phone, an intro modal shows up before start activity

    $ctrl.step = step;

    Object.assign($ctrl, {
      title: 'Goal Insights And Actions',
      direction: 'Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eisumod tempor incididunt ut labore et dolore magna aliqua.',
      isPhone: detectDevice.isPhone(),
      personal: {
        goal: "",
        reason: ""
      },
      section: 1
    });

    if ($ctrl.isPhone) {
      $ctrl.intro = true;
      Object.assign($ctrl, {
        title1: 'Step ' + step,
        title2: $ctrl.title,
        beginLabel: 'Continue'
      });
    }

    $ctrl.begin = function() {
      $ctrl.intro = false;
    }

    $ctrl.next = function() {

    }

    $ctrl.close = function() {
      if ($ctrl.intro) {
        $uibModalInstance.close(false);
        return;
      }

      $uibModal.open({
        animation: true,
        templateUrl: 'views/modals/complete.html',
        controller: 'ModalCompleteCtrl',
        controllerAs: '$ctrl',
        windowClass: 'backdrop',
        resolve: {
          step: step,
          warning: true,
          title: null
        }
      }).result.then(function(leave) {
        if (leave) {
          $uibModalInstance.close(false);
        }
      });
    }
  });
