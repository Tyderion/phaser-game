(function () {
  'use strict';

  angular
    .module('ae.layout.views.Public', [])
    .config(StateConfig);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('public', {
        views: {
          'root': {
            templateUrl: util.templateUrl('ae.layout.views.Public')
          }
        }
      });
  }


}());
