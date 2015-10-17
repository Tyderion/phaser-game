(function () {
  'use strict';

  angular
    .module('ae.core.router.Router', [
      'ae.core.router.Start',
      'ae.core.router.Destination',
      'ae.core.router.Layer'
    ])
    .factory('appRouter', AppRouter)
    .run(function ($rootScope, $urlRouter, appRouter) {

      $rootScope.appRouterIsWorking = false;
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        appRouter.addStateChangeListener(event, toState, toParams, fromState, fromParams);
      });

      $urlRouter.listen();

    });

  function AppRouter($state, $urlRouter, $rootScope, AppRouterLayer, AppRouterStart, AppRouterDestination) {

    var Router = function Router() {
      this.stack = [];
      this.previousState = {};
    };

    Router.prototype.use = function (fn) {
      var layer;
      if (typeof fn !== 'function') {
        layer = new AppRouterLayer(arguments[1], arguments[0]);
      } else {
        layer = new AppRouterLayer(fn);
      }

      if (layer) {
        this.stack.push(layer);
      }
    };

    Router.prototype.addStateChangeListener = function (event, toState, toParams, fromState, fromParams) {
      if (this.stack.length > 0 && this.previousState.name !== toState.name) {
        event.preventDefault();
        this.previousState = toState;
        this.dispatch(
          new AppRouterStart(fromState, fromParams),
          new AppRouterDestination(toState, toParams),
          function (err) {
            $rootScope.appRouterIsWorking = false;
            if (!err) {
              $state.go(toState.name);
            }
          });
      }
    };

    Router.prototype.dispatch = function (start, destination, done) {
      var idx = 0;
      var stack = this.stack;
      if (stack.length === 0) {
        return done();
      }

      $rootScope.appRouterIsWorking = true;
      next();
      ////////////////////////////////////

      function next(err) {
        if (err) {
          return done(err);
        }
        var layer = stack[idx++];
        if (!layer) {
          return done();
        }
        try {
          if (!layer.hasRoute() || (layer.hasRoute() && layer.matchesState(destination.state.name))) {
            layer.handle(
              start,
              destination,
              next,
              done
            );
          } else {
            return next();
          }
        } catch (err) {
          next(err);
        }
      }
    };

    /////////////////////////////////
    var router = new Router();
    return router;

  }

}());
