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
      templateUrl: 'views/directives/header.html',
      restrict: 'E',
      replace: true,
      scope: {
        avatarUrl: '@',
        name: '@',
        tabLabel: '@'
      },
      link: function (scope, element, attrs) {

      }
    };
  });
