'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:ModalPositiveGoalCtrl
 * @description
 * # ModalPositiveGoalCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('ModalPositiveGoalCtrl', function ($uibModalInstance, step) {
    var $ctrl = this;

    $ctrl.step = step;
    $ctrl.title = 'Positive Goal Setting Theory & Science';
    $ctrl.videos = [
      {title: 'Video Title', duration: '04:38', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eisumod tempor incididunt ut labore et dolore magna aliqua.'},
      {title: 'Video Title', duration: '04:38', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eisumod tempor incididunt ut labore et dolore magna aliqua.'},
      {title: 'Video Title', duration: '04:38', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eisumod tempor incididunt ut labore et dolore magna aliqua.'},
    ];

    $ctrl.close = function() {
      $uibModalInstance.close();
    }
  });
