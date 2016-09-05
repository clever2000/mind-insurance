'use strict';

/**
 * @ngdoc directive
 * @name mindInsuranceApp.directive:header
 * @description
 * # header
 */
angular.module('mindInsuranceApp')
  .directive('header', function () {
    return {
      templateUrl: 'views/header.html',
      restrict: 'E',
      scope: {
        avatarUrl: '@',
        name: '@',
        tabLabel: '@'
      },
      link: function (scope, element, attrs) {
        
      }
    };
  });
