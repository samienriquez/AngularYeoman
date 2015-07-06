'use strict';

angular.module('proyecto1App')
  .service('profile', function ($http) {
    return{
      all: $http.get('/api/homepages'),
      get: function (id) {
        return $http.get('/api/homepages/'+id)
      },
      update: function(profile){
        console.log(profile);
        return $http.put('/api/homepages/'+profile._id,{name: profile.name, carrer: profile.carrer, job: profile.job,
          address: profile.address, location: profile.location, about: profile.about, photo: profile.photo,
          gmail: profile.gmail, facebook: profile.facebook, twitter: profile.twitter})
      },
    	new: function(profile){
    		console.log(profile);
  			return $http.post('/api/homepages/',{name: profile.name, carrer: profile.carrer, job: profile.job,
  				address: profile.address, location: profile.location, about: profile.about, photo: profile.photo,
  				gmail: profile.gmail, facebook: profile.facebook, twitter: profile.twitter})
        },
      delete:function (id) {
        return $http.delete('/api/homepages/'+id)
      }
    }
  });
