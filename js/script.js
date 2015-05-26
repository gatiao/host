angular.module('app', ['ui.router'])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('registro', {
        url: '/registro',
        templateUrl: 'includes/templates/registro-acesso.html',
        controller: 'registroCtrl'
      })
      .state('arrecada', {
        url: '/',
        templateUrl: 'includes/templates/arrecada.html',
        controller: 'arrecadaCtrl'
      });
  }]);