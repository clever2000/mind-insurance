'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:ModalGoalInsightsCtrl
 * @description
 * # ModalGoalInsightsCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('ModalGoalInsightsCtrl', function($uibModalInstance, $uibModal, $scope, RestService, detectDevice, step) {
    var $ctrl = this;

    function refreshPage() {
      $ctrl.prevButton.label = 'Back to Section ' + ($ctrl.section - 1);
      $ctrl.nextButton.label = 'Continue to Section ' + ($ctrl.section + 1);
      if ($ctrl.section === 1) {
        $ctrl.prevButton.label = 'Back';
      } else if ($ctrl.section === 3) {
        $ctrl.nextButton.label = 'Continue';
      }
      // $scope.$broadcast('rzSliderForceRender');
    }

    $ctrl.intro = false; // in mobile phone, an intro modal shows up before start activity
    $ctrl.step = step;

    _.assign($ctrl, {
      title: 'Goal Insights And Actions',
      direction: 'Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eisumod tempor incididunt ut labore et dolore magna aliqua.',
      isPhone: detectDevice.isPhone(),
      personal: {
        section1: {
          goal: '',
          motivationDegree: '',
          why: '',
          how: '',
        },
        section2: {
          intrinsicMotivation: 50,
          intrinsicOptions: {
            floor: 1,
            floorLabel: 'Weak',
            ceil: 100,
            ceilLabel: 'Strong'
          },
          identifiedMotivation: 50,
          identifiedOptions: {
            floor: 1,
            floorLabel: 'Weak',
            ceil: 100,
            ceilLabel: 'Strong'
          },
          externalMotivation: 50,
          externalOptions: {
            floor: 1,
            floorLabel: 'Weak',
            ceil: 100,
            ceilLabel: 'Strong'
          },
          introjectedMotivation: 50,
          introjectedOptions: {
            floor: 1,
            floorLabel: 'Weak',
            ceil: 100,
            ceilLabel: 'Strong'
          },
          action1: '',
          action2: ''
        },
        section3: {
          mainReason: 50,
          mainReasonOptions: {
            floor: 1,
            floorLabel: 'Avoid',
            ceil: 100,
            ceilLabel: 'Strong'
          },
          action1: '',
          action2: ''
        }
      },
      responseSelectors: ['Highly motivated', 'Somewhat motivated', 'Not very motivated', 'Completely unmotivated'],
      section: 1
    });

    if ($ctrl.isPhone) {
      $ctrl.intro = true;
      _.assign($ctrl, {
        title1: 'Step ' + step,
        title2: $ctrl.title,
        beginLabel: 'Continue'
      });
    }

    $ctrl.begin = function() {
      $ctrl.intro = false;
    }

    $ctrl.prevButton = {
      label: '',
      onClick: function() {
        $ctrl.section--;
        refreshPage();
      }
    }
    $ctrl.nextButton = {
      label: 'Continue to Section 2',
      onClick: function() {
        $ctrl.section++;
        refreshPage();
      }
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
