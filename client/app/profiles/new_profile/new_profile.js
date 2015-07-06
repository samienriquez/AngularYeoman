'use strict';

angular.module('proyecto1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new_profile', {
        url: '/profiles/new',
        templateUrl: 'app/profiles/new_profile/new_profile.html',
        controller: 'NewProfileCtrl'
      });
  });