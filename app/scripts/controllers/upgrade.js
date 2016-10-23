'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:UpgradeCtrl
 * @description
 * # UpgradeCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('UpgradeCtrl', function () {
    var vm = this;

    vm.packages = [
      {id: 1, name: 'Happy', pricing: '0', features:[1,2,3,4], description: 'Your very own Happiness Lab in which to implement scientifically proven strategies for enhancing happiness and wellbeing.'},
      {id: 2, name: 'Happier', pricing: '55', features:[1,2,3,4,5,6], description: 'Your very own Happiness Lab in which to implement scientifically proven strategies for enhancing happiness and wellbeing.'},
      {id: 3, name: 'Happiness Premium', pricing: '82.50', features:[1,2,3,4,5,6,7], description: 'Your very own Happiness Lab in which to implement scientifically proven strategies for enhancing happiness and wellbeing.'}
    ]
    vm.features = [
      {id: 1, name: 'Subjective Well Being', description: 'World\'s best practice measure of happiness to track your progress'},
      {id: 2, name: 'Mindfulness', description: 'A different practice everyday to cultivate emotional balance'},
      {id: 3, name: 'Values', description: 'Explore your personal values framework and how to live in closer alignment with what is most important to you'},
      {id: 4, name: 'Introduction to Positive Goals', description: 'Learn how to set goals that support success and well being'},
      {id: 5, name: 'Advanced Positive Goals', description: 'Integrate your goal setting across all aspects of your life'},
      {id: 6, name: 'R2 Strengths Profile', description: 'Discover your strengths and be guided by your personal Strengths Development Spcialist to use your strengths everyday'},
      {id: 7, name: 'Positive Coaching', description: 'Three personal coaching sessions using empirical science to help you thrive'}
    ];
  });
