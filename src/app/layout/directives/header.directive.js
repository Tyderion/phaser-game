(function () {
  'use strict';

  angular
    .module('ae.layout.directives.Header', [
      'ae.core.utils.Logger'
    ])
    .directive('aeHeader', HeaderDirective);

  function HeaderDirective() {
    return {
      restrict:         'EA',
      templateUrl:      module.templateUrl(),
      controller:       HeaderController,
      controllerAs:     'header',
      bindToController: true // because the scope is isolated
    };
  }

  /**
   * @memberOf layout.aeHeader
   * @name HeaderController
   *
   * @constructor
   */
  function HeaderController(Logger) {
    var log = new Logger('app.layout.directives.Header');
    var vm = this;

    // Your code goes here...

  }


}());
