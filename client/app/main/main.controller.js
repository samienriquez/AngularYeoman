'use strict';

angular.module('proyecto1App')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.title="Samara Catalina Enriquez";
    $scope.carrer="Ingeniera Electronica y Telecomunicaciones";
    $scope.aboutCarrer="Desarrollo web y movil";
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
    $scope.around="Encuentrame en la Red";
    $scope.aboutme1="Ingeniera en Electronica y Telecomunicaciones con enfasis en el area de telematica, un año de experiencia en desarrollo web y movil con varias aplicaciones publicadas.";
    $scope.aboutme2="Especial interes en tecnologias Android, Windows Phone, Unity y JavaScript.";
    $scope.gmail="https://plus.google.com/114297311619084407901/posts";
    $scope.facebook="https://www.facebook.com/sami915";
    $scope.works=[{
            title:"Trabajo Uno",
            description:" On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!",
            image:"assets/images/img/cabin.png",
            url:"#portfolioModal1"
        },
        {
            title:"Trabajo dos",
            description:"Descripcion trabajo dos:  On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12! ",
            image:"assets/images/img/cake.png",
            url:"#portfolioModal2"
        },
        {
            title:"Trabajo tres",
            description:"Descripcion trabajo tres:  On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!",
            image:"assets/images/img/circus.png",
            url:"#portfolioModal3"
        },
        {
            title:"Trabajo cuatro",
            description:" On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!",
            image:"assets/images/img/game.png",
            url:"#portfolioModal4"
        }];
    
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
