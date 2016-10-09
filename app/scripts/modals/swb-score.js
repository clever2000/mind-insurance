'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:ModalSWBScoreCtrl
 * @description
 * # ModalSWBScoreCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('ModalSWBScoreCtrl', function ($uibModalInstance) {
    var $ctrl = this;

    $ctrl.score = 3;
    $ctrl.ok = function() {
      $uibModalInstance.close();
    }    
  });
