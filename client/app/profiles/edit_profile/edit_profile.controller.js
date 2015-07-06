'use strict';

angular.module('proyecto1App')
  .controller('EditProfileCtrl', function ($scope, $stateParams,profile, $window) {
  	$scope.profile=null;
  	profile.get($stateParams.id).success(function(data, status, headers, config) {
        $scope.profile=data;
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });


    $scope.saveEdit=function  () {

      profile.update($scope.profile).success(function(data, status, headers, config) {
         alert("Se guardo la info");
         $window.location.href = '/profiles'
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });
       
    }
    
  });
