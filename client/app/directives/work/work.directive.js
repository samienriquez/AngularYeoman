'use strict';

angular.module('proyecto1App')
  .directive('work', function () {
    return {
      templateUrl: 'app/directives/work/work.html',
      restrict: 'EA',
      scope: { 
      info: '=' 
      }, 
      link: function (scope, element, attrs) {
      }
    };
  });