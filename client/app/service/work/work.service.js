'use strict';

angular.module('proyecto1App')
  .service('work', function ($http) {

  	return{
  		all: function () {
        return $http.get('/api/works')
      },
  		get: function (id) {
  			return $http.get('/api/works/'+id)
  		},
  		update: function(work){
  			console.log(work);
  			return $http.put('/api/works/'+work._id,{title: work.title, description: work.description, image: work.image})
  		},
  		new: function(work){
  			return $http.post('/api/works/',{title: work.title, description: work.description, image: work.image})
        },

      delete: function (id) {
        return $http.delete('/api/works/'+id)
      }
  		
  	}
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
