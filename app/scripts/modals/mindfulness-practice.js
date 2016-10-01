'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:ModalMindfulnessPracticeCtrl
 * @description
 * # ModalMindfulnessPracticeCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('ModalMindfulnessPracticeCtrl', function ($uibModalInstance) {
    var $ctrl = this;

    $ctrl.recordings = [
      {name: '9 Breath Cycle', duration: '04:38', frequency: '74.5', date: '25 May 2016'},
      {name: 'Loving Kindness', duration: '05:30', frequency: '54.5', date: '17 June 2016'},
      {name: 'For Sleeping', duration: '04:38', frequency: '74.5', date: '02 July 2016'},
      {name: 'Managing Stress', duration: '04:38', frequency: '74.5', date: '25 May 2016'},
      {name: '9 Breath Cycle', duration: '04:38', frequency: '74.5', date: '25 May 2016'},
      {name: '9 Breath Cycle', duration: '04:38', frequency: '74.5', date: '25 May 2016'}
    ];

    $ctrl.close = function() {
      $uibModalInstance.close();
    }
  });
