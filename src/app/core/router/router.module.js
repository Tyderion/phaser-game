(function () {
  'use strict';

  angular
    .module('ae.core.router', [
      'ui.router',
      'ui.router.router',
      'ui.router.state',
      'ae.core.router.Start',
      'ae.core.router.Destination',
      'ae.core.router.Layer',
      'ae.core.router.Router'
    ]);

})();
