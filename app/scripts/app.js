'use strict';

angular.module('goToVacationApp', [
    'ui.router',
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ngSanitize'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('main', {
      url: '/',
      views: {
        'header': {
          templateUrl:'views/header.html'
        },
        'content': {
          templateUrl:'views/main.html',
          controller:'MainCtrl'
        },
        'footer': {
          templateUrl:'views/footer.html'
        }
      }
    })
    .state('about', {
      url: '/about',
      views: {
      'content@': {
          templateUrl : 'views/about.html',
          controller  : 'AboutCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  });
