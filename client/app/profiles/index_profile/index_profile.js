'use strict';

angular.module('proyecto1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('index_profile', {
        url: '/profiles',
        templateUrl: 'app/profiles/index_profile/index_profile.html',
        controller: 'IndexProfileCtrl'
      });
  });