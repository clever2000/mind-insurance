'use strict';

/**
 * @ngdoc directive
 * @name mindInsuranceApp.directive:slider
 * @description
 * # slider
 */
angular.module('mindInsuranceApp')
  .directive('slider', function () {
    return {
      templateUrl: 'views/directives/slider.html',
      restrict: 'E',
      replace: true,
      scope: {},
      bindToController: {
        sliderModel: '=',
        sliderOptions: '='
      },
      controller: function () {
        var $ctrl = this;
        $ctrl.sliderOptions.translate = function(value, sliderId, label) {
          if (label === 'model') {
            return value;
          }
          else if (label === 'floor') {
            return $ctrl.sliderOptions.floorLabel;
          }
          else if (label === 'ceil') {
            return $ctrl.sliderOptions.ceilLabel;
          }

          return '';
        }
      },
      controllerAs: '$ctrl'
    };
  });
