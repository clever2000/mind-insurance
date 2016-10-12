'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:HappinesslabCtrl
 * @description
 * # HappinesslabCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('HappinessLabCtrl', function ($scope, $http, RestService) {
    var vm = this;
    vm.step = 1;
    vm.activityTiles = [];

    // scope variables start
    var dashboard;
    // scope variables end


    for (var i = 1; i <= 4; i++) {
      vm.activityTiles.push({step: i})
    }    
 	
 	  // Get dashboard object, which include user assestment progress information.
	  RestService.getUserDashboard().then(function(response) {
          $scope.dashboard = response;
          console.info($scope.dashboard);
    });


  });
