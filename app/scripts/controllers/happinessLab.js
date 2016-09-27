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

    for (var i = 1; i <= 4; i++) {
      vm.activityTiles.push({step: i})
    }    
 	
	RestService.getTestData().then(function(response) {
        	console.info(response);
            $scope.greeting = response.data;
     });

	

    //http://192.168.58.132:8034/Umbraco/Api/test/GetTestData
    /*$http.get('http://192.168.58.132:8034/Umbraco/Api/test/GetTestData').
        then(function(response) {
        	console.info(response);
            $scope.greeting = response.data;
       });
       */
  });
