'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:ModalAssessmentCtrl
 * @description
 * # ModalAssessmentCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('ModalAssessmentCtrl', function ($uibModalInstance, detectDevice, step) {
    var $ctrl = this;
    $ctrl.intro = false;      // in mobile phone, an intro modal shows up before start activity

    $ctrl.step = step;
    $ctrl.selectedAnswer = 0;
    $ctrl.questions = [];
    for (var i = 0; i < 21; i++) {
      $ctrl.questions.push('Thinking up new ideas and being creative is important to me. I like to do things in my own original way.');
    }

    switch (step) {
      case 1:
        Object.assign($ctrl, {
          title: 'Values Assignment',
          direction: 'Below are a series of statements. Please read each statement carefully and think about how much each statement is or is not like you. Select a response that represents how much the sattement is like you.',
          questionX: '01',
          questionY: '21',
          question: 'Thinking up new ideas and being creative is important to me. I like to do things in my own original way.'
        });
        break;
      default:
        break;
    }

    if (detectDevice.isPhone) {
      $ctrl.intro = true;
      Object.assign($ctrl, {
        title1: 'Step ' + step,
        title2: $ctrl.title,
        beginLabel: 'Continue'
      });
    }

    $ctrl.begin = function() {
      $ctrl.intro = false;
    }
    $ctrl.next = function() {
      // $uibModalInstance.close(true);
    }
    $ctrl.close = function() {
      $uibModalInstance.close();
    }
  });
