'use strict';

angular.module('proyecto1App')
  .controller('IndexWorkCtrl', function ($scope, work) {
    work.all.success(function(data, status, headers, config) {
        $scope.works = data;
        console.log( $scope.works);
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });
  });
