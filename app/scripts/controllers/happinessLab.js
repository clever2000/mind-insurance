'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:HappinesslabCtrl
 * @description
 * # HappinesslabCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('HappinessLabCtrl', function () {
    var vm = this;
    vm.step = 1;
    vm.activityTiles = [];

    for (var i = 1; i <= 4; i++) {
      vm.activityTiles.push({step: i})
    }    
  });
