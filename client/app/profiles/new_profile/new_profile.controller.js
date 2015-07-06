'use strict';

angular.module('proyecto1App')
  .controller('NewProfileCtrl', function ($scope, profile, $window) {

  	$scope.profile=null;

  	$scope.save=function  () {
  		profile.new($scope.profile).success(function(data, status, headers, config) {
         alert("Se guardo la info");
         $window.location.href = '/profiles'
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });
  	}
    
  });
