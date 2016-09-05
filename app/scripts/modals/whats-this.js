'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:ModalWhatsThisCtrl
 * @description
 * # ModalWhatsThisCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('ModalWhatsThisCtrl', function ($uibModalInstance) {
    var vm = this;
    vm.step = 1;  // should be pulled from service

    switch (vm.step) {
      case 1:
        Object.assign(vm, {
          title: 'What is My Values Assignment'
        });
        break;
      default:
        break;
    }

    vm.close = function() {
      $uibModalInstance.close(true);
    }
  });
