'use strict';

angular.module('proyecto1App')
  .service('work', function ($http) {

  	return{
  		all: $http.get('/api/works'),
  		get: function (id) {
  			return $http.get('/api/works/'+id)
  		}
  		
  	}
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
