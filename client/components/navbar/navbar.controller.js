'use strict';



angular.module('proyecto1App')
  .controller('NavbarCtrl', function ($scope, $location, $http) {

$http.get('/api/homepages').
      success(function(data, status, headers, config) {
        $scope.title=data[0].name;
       }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });
   
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