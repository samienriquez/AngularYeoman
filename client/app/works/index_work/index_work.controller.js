'use strict';

angular.module('proyecto1App')
  .controller('IndexWorkCtrl', function ($scope, work) {
    $scope.works=null;

    var listAll=function  () {
      work.all().success(function(data, status, headers, config) {
        $scope.works = data;
        console.log( $scope.works);
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });
    } 
    listAll();

    
    $scope.delete_work=function (id) {
      work.delete(id).success(function(data, status, headers, config) {
       alert("Se elimino el Trabajo");
       listAll();
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });
      
    }
  });
