'use strict';

angular.module('proyecto1App')
  .controller('NewWorkCtrl', function ($scope, work) {
  	$scope.work=null;

  	$scope.save=function () {
  		work.new($scope.work).success(function(data, status, headers, config) {
         alert("Se guardo la info");
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });
  	}
  	
    
  });
