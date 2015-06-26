'use strict';

angular.module('proyecto1App')
  .directive('work', function () {
    return {
      templateUrl: 'app/directives/work/work.html',
      restrict: 'EA',
      controller: function ($scope,$modal) {
      	$scope.openModal=function (size) {

		 var modalInstance = $modal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'app/modals/modal.html',
	      controller: 'ModalCtrl',
	      size: size,
	      resolve: {
	        info: function () {
	          return $scope.info;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
      		
      	}
      },
      scope: { 
      	info: '=' 
      }, 
      link: function (scope, element, attrs) {
      }
    };
  });