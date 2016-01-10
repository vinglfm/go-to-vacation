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
    .state('app', {
      url: '/',
      views: {
        'header': {
          templateUrl:'views/header.html'
        },
        'content': {
          templateUrl:'views/main.html',
          controller:'MainController'
        },
        'footer': {
          templateUrl:'views/footer.html'
        }
      }
    })
    .state('app.about', {
      url: 'about',
      views: {
      'content@': {
          templateUrl : 'views/about.html',
          controller  : 'AboutController'
        }
      }
    })
    .state('app.contactus', {
      url: 'contactus',
      views: {
      'content@': {
          templateUrl : 'views/contactus.html',
          controller  : 'ContactController'
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  });
