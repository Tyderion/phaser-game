(function () {
  'use strict';

  angular
    .module('ae.core.configs.ThirdParty', [
      'ae.core.constants.Config'
    ])
    .config(TranslateConfig)
    .config(UiRouterConfig);

  function TranslateConfig($translateProvider, appConfig) {
    $translateProvider.useStaticFilesLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage(appConfig.LANGUAGE);
  }

  function UiRouterConfig($urlRouterProvider){
    // when there is an empty route, redirect to /index
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/home');
  }

}());
