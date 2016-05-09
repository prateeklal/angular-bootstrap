'use strict';

/**
 * @ngdoc overview
 * @name learnApp
 * @description
 * # learnApp
 *
 * Main module of the application.
 */
angular
  .module('learnApp', [
    'ngRoute',
    'learnApp.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'driversController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/drivers', {
        templateUrl: 'views/main.html',
        controller: 'driversController'
      })
      .when('/drivers/:id', {
        templateUrl: 'views/driver.html',
        controller: 'driverController'
      })
      .otherwise({
        redirectTo: '/drivers'
      });
  });
