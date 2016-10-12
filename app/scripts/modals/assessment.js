'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:ModalAssessmentCtrl
 * @description
 * # ModalAssessmentCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('ModalAssessmentCtrl', function($uibModalInstance, $uibModal,RestService,  detectDevice, step, assessment) {
    var $ctrl = this;
    $ctrl.intro = false; // in mobile phone, an intro modal shows up before start activity

    $ctrl.step = step;
    $ctrl.questionIndex = 0;
    $ctrl.questions = assessment.questions.map(function(a) {
      return a.name;
    });
    $ctrl.responses = [];
    $ctrl.nextLabel = 'Next';

    Object.assign($ctrl, {
      title: assessment.name,
      direction: assessment.description,
      nQuestions: assessment.questions.length,
      responseSelectors: assessment.questions[0].anwsers.map(function(a) {
        return a.name;
      })
    });

    /*
            for (var i = 0; i < $ctrl.nQuestions; i++) {
              $ctrl.questions.push('If I could live my life over, I would change almost nothing.');
              $ctrl.responses.push(0);
            }*/


    /*    switch (step) {
          case 1:
            Object.assign($ctrl, {
              title: 'Subjective Wellbeing Assessment',
              direction: 'On the following screens are five statements that you may agree or disagree with. Select the option that most meets your agreement. Please be open and honest in your responding.',
              nQuestions: 5,
              responseSelectors: ['Not at all like me', 'Not much like me', 'A little like me', 'Somewhat like me', 'Like me', 'Very much like me']
            });
            for (var i = 0; i < $ctrl.nQuestions; i++) {
              $ctrl.questions.push('If I could live my life over, I would change almost nothing.');
              $ctrl.responses.push(0);
            }
            break;

          case 2:
            Object.assign($ctrl, {
              title: 'Values Assessment',
              direction: 'Below are a series of statements. Please read each statement carefully and think about how much each statement is or is not like you. Select a response that represents how much the statement is like you.',
              nQuestions: 21,
              responseSelectors: ['Not at all like me', 'Not much like me', 'A little like me', 'Somewhat like me', 'Like me', 'Very much like me']
            });
            for (var i = 0; i < $ctrl.nQuestions; i++) {
              $ctrl.questions.push('Thinking up new ideas and being creative is important to me.\n I like to do things in my own original way.');
              $ctrl.responses.push(0);
            }

            break;

          default:
            break;
        }*/

    if (detectDevice.isPhone()) {
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

      // can't go to next question until user anwsers current question
      if ($ctrl.questionIndex >= $ctrl.responses.length) {
        return;
      }

      if ($ctrl.questionIndex === $ctrl.questions.length - 1) {
        // finished

        $ctrl.submit();

        return;
      }

      $ctrl.questionIndex++;

      if ($ctrl.questionIndex === $ctrl.questions.length - 1) { // last question
        $ctrl.nextLabel = 'Finish';
      }
    }

    $ctrl.submit = function() {

      // Set question selected anwser value to true
      for (var i = 0; i < assessment.questions.length; i++) {
        var question = assessment.questions[i];
        var selectedAnwserIndex = $ctrl.responses[i];


        console.info(selectedAnwserIndex);
        question.anwsers[selectedAnwserIndex].value = "true";
      }

      RestService.submitAssessment(assessment).then(function(response) {
        console.info(response);
        $uibModal.open({
          animation: true,
          templateUrl: 'views/modals/complete.html',
          controller: 'ModalCompleteCtrl',
          controllerAs: '$ctrl',
          windowClass: 'backdrop',
          resolve: {
            step: step,
            warning: false,
            title: function() {
              return $ctrl.title;
            }
          }
        }).result.then(function() {
          $uibModalInstance.close(true);
        });

      });
    }

    $ctrl.close = function() {

      if ($ctrl.intro) {
        $uibModalInstance.close(false);
        return;
      }

      $uibModal.open({
        animation: true,
        templateUrl: 'views/modals/complete.html',
        controller: 'ModalCompleteCtrl',
        controllerAs: '$ctrl',
        windowClass: 'backdrop',
        resolve: {
          step: step,
          warning: true,
          title: null
        }
      }).result.then(function(leave) {
        if (leave) {
          $uibModalInstance.close(false);
        }
      });
    }
  });