'use strict';

angular.module('proyecto1App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit_profile', {
        url: '/profiles/:id/edit',
        templateUrl: 'app/profiles/edit_profile/edit_profile.html',
        controller: 'EditProfileCtrl'
      });
  });