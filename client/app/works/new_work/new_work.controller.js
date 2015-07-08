'use strict';

angular.module('proyecto1App')
  .controller('NewWorkCtrl', function ($scope, work, $window, Upload) {
  	$scope.work=null;

  	$scope.save=function () {
  		work.new($scope.work).success(function(data, status, headers, config) {
         alert("Se guardo la info");
         $window.location.href = '/works'
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });
  	}

     //watch for image file upload
    $scope.$watch('files', function() {  
      $scope.upload($scope.files);
    });

    
    $scope.upload = function(files) { 
      $scope.progressPercentage= 0;
      if (files && files.length) {
        var file = files[0];
        Upload.upload({
          url: '/api/works/uploads',
          fields: {
            'imagename': 'a_name'
          },
          file: file
        }).progress(function(evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' +
          evt.config.file.name);
          $scope.progressPercentage=  progressPercentage ;
        }).success(function(data, status, headers, config) {
          $scope.image = data;
          if ($scope.image.uploadError) {
            $scope.uploadError = $scope.image.uploadError;
            console.log('error on hand');
            console.log($scope.image.uploadError);
          } else {
            $scope.uploadError = '';
            console.log('ok');
            $scope.$apply;
            // UserImage.saveUserImage(thisUser, $scope.image.path, function(data) {
            //   $scope.loadUserImage(data.username);
            // });
          }
        });
      }
    };
  });
