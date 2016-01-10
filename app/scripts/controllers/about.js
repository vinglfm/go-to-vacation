'use strict';

/**
 * @ngdoc function
 * @name goToVacationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the goToVacationApp
 */
angular.module('goToVacationApp')
  .controller('AboutController', ['$state', function ($state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
