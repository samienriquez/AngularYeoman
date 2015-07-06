'use strict';

angular.module('proyecto1App')
  .controller('IndexProfileCtrl', function ($scope, profile) {
  	profile.all.success(function(data, status, headers, config) {
        $scope.visible=data.length;
        console.log($scope.visible);
        $scope.profile = data[0];
        console.log( data);
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });

   $scope.delete=function (id) {
      profile.delete(id).success(function(data, status, headers, config) {
        
        alert("Se elimino la informacion del perfil");
        $scope.profile = null;
        $scope.visible=false;
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });
    }
   
  });
