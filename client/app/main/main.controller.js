'use strict';

angular.module('proyecto1App')
  .controller('MainCtrl', function ($scope, $http) {

     $http.get('/api/homepages').
      success(function(data, status, headers, config) {
        console.log(data[0]);
        $scope.title=data[0].name;
        $scope.carrer=data[0].carrer;
        $scope.aboutCarrer=data[0].aboutCarrer;
        $scope.address_part1=data[0].address_part1;
        $scope.address_part2=data[0].address_part2;
        $scope.aboutme1=data[0].aboutme1;
        $scope.aboutme2=data[0].aboutme2;
        $scope.gmail=data[0].gmail;
        $scope.facebook=data[0].facebook;
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });
    $scope.portfolio="Portafolio";
    $scope.contact="Contáctame";
    $scope.about="Sobre mi";
    $scope.name="Nombre";
    $scope.email="Correo Electronico";
    $scope.phone="Telefono";
    $scope.message="Mensaje";
    $scope.send="Enviar";
    $scope.location="Ubicación";
    $scope.around="Encuentrame en la Red";
   
    $scope.works = [];
    $http.get('/api/works').
      success(function(data, status, headers, config) {
        $scope.works = data;
        console.log( $scope.works);
      }).
      error(function(data, status, headers, config) {
        alert("No se pudo traer la info");
        console.log("Error al traer los trabajos");
      });
  
    
    // $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };
  });
