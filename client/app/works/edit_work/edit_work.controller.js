'use strict';

angular.module('proyecto1App')
  .controller('EditWorkCtrl', function ($scope,$stateParams,work) {

  	work.get($stateParams.id).success(function(data, status, headers, config) {
        $scope.title = data.title;
        $scope.description=data.description;
        $scope.image=data.image;
        console.log( data);
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });
    
  });
