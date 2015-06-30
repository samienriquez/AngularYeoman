'use strict';

angular.module('proyecto1App')
  .controller('ModalCtrl', function ($scope,$modalInstance, $http, info) {
    $scope.info = info;

    $scope.close = function () {
    $modalInstance.close();
  };
    
  });