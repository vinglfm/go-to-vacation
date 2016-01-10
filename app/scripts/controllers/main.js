'use strict';

/**
 * @ngdoc function
 * @name goToVacationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goToVacationApp
 */
angular.module('goToVacationApp')
  .controller('MainController', ['$state', function ($state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
