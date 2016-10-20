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

    vm.features = [
      {name: 'Subjective Well Being', description: 'World\'s best practice measure of happiness to track your progress', free: true, paid: true, premium: true},
      {name: 'Mindfulness', description: 'A different practice everyday to cultivate emotional balance', free: true, paid: true, premium: true},
      {name: 'Values', description: 'Explore your personal values framework and how to live in closer alignment with what is most important to you', free: true, paid: true, premium: true},
      {name: 'Introduction to Positive Goals', description: 'Learn how to set goals that support success and well being', free: true, paid: true, premium: true},
      {name: 'Advanced Positive Goals', description: 'Integrate your goal setting across all aspects of your life', free: false, paid: true, premium: true},
      {name: 'R2 Strengths Profile', description: 'Discover your strengths and be guided by your personal Strengths Development Spcialist to use your strengths everyday', free: false, paid: true, premium: true},
      {name: 'Positive Coaching', description: 'Three personal coaching sessions using empirical science to help you thrive', free: false, paid: false, premium: true}
    ];
  });
