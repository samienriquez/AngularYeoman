'use strict';



angular.module('proyecto1App')
  .controller('NavbarCtrl', function ($scope, $location) {

    $scope.title="Samara Enriquez";
    $scope.portfolio="Portafolio";
    $scope.about="Sobre mi";
    $scope.contact="Contáctame";
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });