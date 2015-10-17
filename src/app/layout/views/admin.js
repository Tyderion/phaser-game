(function () {
  'use strict';

  angular
    .module('ae.layout.views.Admin', [])
    .config(StateConfig);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin', {
        views: {
          'root': {
            templateUrl: util.templateUrl('ae.layout.views.Admin')
          }
        }
      });
  }


}());
