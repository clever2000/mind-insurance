'use strict';

/**
 * @ngdoc directive
 * @name mindInsuranceApp.directive:limitedTextarea
 * @description
 * # limitedTextarea
 */
angular.module('mindInsuranceApp')
  .directive('limitedTextarea', function ($uibModal) {
    function wordCount(text) {
      var s = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
      return s ? s.length : '';
    };

    return {
      templateUrl: 'views/directives/limited-textarea.html',
      restrict: 'E',
      replace: true,
      scope: {},
      bindToController: {
        ngModel: '=',
        maxWord: '@'
      },
      controller: function () {
        var $ctrl = this;
        var prevValue = "";

        $ctrl.onChange = function(val) {
          if (wordCount($ctrl.ngModel) > $ctrl.maxWord) {
            $ctrl.ngModel = prevValue;
          }
          prevValue = $ctrl.ngModel;
        }
      },
      controllerAs: '$ctrl'
    };
  });
