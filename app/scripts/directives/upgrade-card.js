'use strict';

/**
 * @ngdoc directive
 * @name mindInsuranceApp.directive:upgrade-card
 * @description
 * # upgrade-card
 */
angular.module('mindInsuranceApp')
  .directive('upgradeCard', function () {
    return {
      templateUrl: 'views/directives/upgrade-card.html',
      restrict: 'E',
      replace: true,
      scope: {},
      bindToController: {
        package: '='
      },
      controller: function() {
        var $ctrl = this;

        var features = [
          {id: 1, name: 'Subjective Well Being', description: 'World\'s best practice measure of happiness to track your progress'},
          {id: 2, name: 'Mindfulness', description: 'A different practice everyday to cultivate emotional balance'},
          {id: 3, name: 'Values', description: 'Explore your personal values framework and how to live in closer alignment with what is most important to you'},
          {id: 4, name: 'Introduction to Positive Goals', description: 'Learn how to set goals that support success and well being'},
          {id: 5, name: 'Advanced Positive Goals', description: 'Integrate your goal setting across all aspects of your life'},
          {id: 6, name: 'R2 Strengths Profile', description: 'Discover your strengths and be guided by your personal Strengths Development Spcialist to use your strengths everyday'},
          {id: 7, name: 'Positive Coaching', description: 'Three personal coaching sessions using empirical science to help you thrive'}
        ];

        $ctrl.features = $ctrl.package.features.map(function(featureId){
          return _.find(features, {id: featureId});
        });
        $ctrl.expanded = false;
        $ctrl.toggleDetails = function() {
          $ctrl.expanded = !$ctrl.expanded;
        }
      },
      controllerAs: '$ctrl'
    };
  });
