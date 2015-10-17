(function () {
  'use strict';

  angular
    .module('ae.core.router.Start', [])
    .factory('AppRouterStart', AppRouterStart);

  function AppRouterStart() {
    var Start = function Start(state, params) {
      this.state = state;
      this.params = params;
    };

    return Start;

  }

}());
