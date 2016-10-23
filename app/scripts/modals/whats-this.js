'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:ModalWhatsThisCtrl
 * @description
 * # ModalWhatsThisCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('ModalWhatsThisCtrl', function ($uibModal, $uibModalInstance, step) {
    var $ctrl = this;
    $ctrl.step = step;
    $ctrl.beginLabel = "Let's Begin!";

    switch (step) {
      case 1:
        _.assign($ctrl, {
          title1: 'What is',
          title2: 'Values Assessment?',
          direction: 'The Values Assessment, is a tool to help you gain insight into your current avlues hierarchy and the motivations behind your values. \
            It will also help you to identify, understand and respond to the impact of both congruence and conflict among your values.',
        });
        break;
      case 3:
        _.assign($ctrl, {
          title1: 'What is',
          title2: 'Goal Insights And Actions?',
          direction: 'The Goals Insight and Actions is ',
        });
        break;
      case 4:
        _.assign($ctrl, {
          title1: 'What is',
          title2: 'Values Insights And Actions?',
          direction: 'The Values Insight and Actions is lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei- is a tool to help you gain insight into your current avlues hierarchy and the motivations behind your values. \
            It will also help you to identify, understand and respond to the impact of both congruence and conflict among your values.',
        });
        break;
      default:
        break;
    }

    $ctrl.begin = function() {
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

      $uibModalInstance.close();
    }

    $ctrl.close = function() {
      $uibModalInstance.close();
    }
  });
