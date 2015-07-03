'use strict';

angular.module('proyecto1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('index_work', {
        url: '/works',
        templateUrl: 'app/works/index_work/index_work.html',
        controller: 'IndexWorkCtrl'
      });
  });