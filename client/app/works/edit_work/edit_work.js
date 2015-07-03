'use strict';

angular.module('proyecto1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit_work', {
        url: '/works/:id/edit',
        templateUrl: 'app/works/edit_work/edit_work.html',
        controller: 'EditWorkCtrl'
      });
  });