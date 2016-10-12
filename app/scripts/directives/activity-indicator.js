'use strict';

/**
 * @ngdoc directive
 * @name mindInsuranceApp.directive:activityIndicator
 * @description
 * # activityIndicator
 */
angular.module('mindInsuranceApp')
  .directive('activityIndicator', function($uibModal) {
    return {
      templateUrl: 'views/directives/activity-indicator.html',
      restrict: 'E',
      replace: true,
      scope: {
        todo: '=',
        completed: '='
      },

      bindToController: {

      },

      controller: function($scope, $timeout, RestService) {
        var vm = this;
        var step = 1 // This should be pulled from service
        var currentAssessment;

        vm.inital = function() {
          // currect step
          currentAssessment = Array.prototype.slice.call($scope.todo, 0)[0];
          step = $scope.completed.length + 1;

          Object.assign(vm, {
            step: step,
            stepTitle: currentAssessment.name,
            detail: currentAssessment.description,
          });

          vm.openWhatsThis = function() {
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

            modalInstance.result.then(function(status) {
            }, function() {

            });
          }

          vm.openAssessment = function() {
            var id = currentAssessment.id;
            RestService.getAssessmentDetails(id).then(function(response) {
              var assessment = response;
              $uibModal.open({
                animation: true,
                templateUrl: 'views/modals/assessment.html',
                controller: 'ModalAssessmentCtrl',
                controllerAs: '$ctrl',
                windowClass: 'modal-background',
                resolve: {
                  step: step,
                  assessment: assessment
                }
              });
            });
          }
        }

        $scope.$watch(
          "todo",
          function handleFooChange(newValue, oldValue) {
            console.log("$scope.todo", newValue);
            if (newValue != undefined) {
              vm.inital();
            }
          }
        );
      },
      controllerAs: 'vm'
    };
  });