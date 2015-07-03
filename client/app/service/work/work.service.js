'use strict';

angular.module('proyecto1App')
  .service('work', function ($http) {

  	return{
  		all: $http.get('/api/works')
  	}
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
