(function () {
  'use strict';

  angular
    .module('ae', [

      // AngularJS Libs
      'ngSanitize',
      'ngMessages',

      // Third-Party Libs
      'ui.router',
      'ui.bootstrap',
      'pascalprecht.translate',

      // Configs, middleware, run...
      'ae.core',

      // Common components, services, filters...

      // App modules with business logic
      'ae.layout',
      'ae.home'

    ]);

}());
