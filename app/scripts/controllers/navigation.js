angular
  .module('goToVacationApp')
  .controller('NavigationController', [ '$stateProvider', function($stateProvider){
    this.isActive = function(state) {
        return $stateProvider.is(state);
    }
  }]);
