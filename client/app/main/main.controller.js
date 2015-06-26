'use strict';

angular.module('proyecto1App')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.title="Samara Catalina Enriquez";
    $scope.carrer="Ingeniera Electronica y Telecomunicaciones";
    $scope.portfolio="Portafolio";
    $scope.contact="Contáctame";
    $scope.about="Sobre mi";
    $scope.name="Nombre";
    $scope.email="Correo Electronico";
    $scope.phone="Telefono";
    $scope.message="Mensaje";
    $scope.send="Enviar";
    $scope.location="Ubicación";
    $scope.address_part1="Cra 10 # 10-57 Urb. Argentina";
    $scope.address_part2="Popayan - Colombia";
    $scope.around="En la Red";
    $scope.aboutme1="Ingeniera en Electronica y Telecomunicaciones con enfasis en el area de telematica, un año de experiencia en desarrollo web y movil con varias aplicaciones publicadas";
    $scope.aboutme2="Especial interes en tecnologias Android, Windows Phone, Unity y JavaScript";
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
