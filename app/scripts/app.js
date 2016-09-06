'use strict';

/**
 * @ngdoc overview
 * @name mindInsuranceApp
 * @description
 * # mindInsuranceApp
 *
 * Main module of the application.
 */
angular
  .module('mindInsuranceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'slick'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        cache: false,
        url: '/main',
        abstract: true,
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as vm'
      })
      .state('main.happinessLab', {
        url: '/happinessLab',
        views: {
          'content': {
            templateUrl: 'views/happinessLab.html',
            controller: 'HappinessLabCtrl as vm'
          }
        }
      })
      .state('main.profile', {
        url: '/profile',
        views: {
          'content': {
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl as vm'
          }
        }
      })
      .state('main.upgrade', {
        url: '/upgrade',
        views: {
          'content': {
            templateUrl: 'views/upgrade.html',
            controller: 'UpgradeCtrl as vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/main/happinessLab');
  });
