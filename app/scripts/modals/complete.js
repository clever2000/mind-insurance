'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:ModalCompleteCtrl
 * @description
 * # ModalCompleteCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('ModalCompleteCtrl', function ($uibModalInstance, warning, step, title) {
    var $ctrl = this;

    $ctrl.warning = warning;

    if (warning) {
      $ctrl.leave = function() {
        $uibModalInstance.close(true);
      }
      $ctrl.cancel = function() {
        $uibModalInstance.close(false);
      }
    }
    else {
      $ctrl.step = step;
      $ctrl.title = title;

      $ctrl.ok = function() {
        $uibModalInstance.close();
      }
    }
  });
