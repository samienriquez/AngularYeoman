'use strict';

angular.module('proyecto1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new_work', {
        url: '/works/new',
        templateUrl: 'app/works/new_work/new_work.html',
        controller: 'NewWorkCtrl'
      });
  });