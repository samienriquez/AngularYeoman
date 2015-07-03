'use strict';

angular.module('proyecto1App')
  .controller('EditWorkCtrl', function ($scope,$stateParams,work) {
    $scope.work=null;
  	work.get($stateParams.id).success(function(data, status, headers, config) {
        $scope.work=data;
        console.log( data);
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });



      $scope.saveEdit=function  () {

        work.update($scope.work).success(function(data, status, headers, config) {
         alert("Se guardo la info");
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });
       
      }
    
  });
