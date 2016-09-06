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
          stepTitle: 'Values Assessment',
        });

        vm.openWhatsThis = function () {
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'views/modals/whats-this.html',
            controller: 'ModalWhatsThisCtrl',
            controllerAs: 'modalVm',
            windowClass: 'pattern-background'
          });

          modalInstance.result.then(function (status) {
            console.log (status + ' returned');
          }, function () {
            console.log ('modal dismissed');
          });
        }
      },
      controllerAs: 'vm'
    };
  });
