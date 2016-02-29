angular.module('app').service('service', function($http){

var baseUrl = 'http://pokeapi.co/api/v2/pokemon/';


this.hello = 'works from service';





this.getApi = function(id){
 	
	return $http({
	   method: 'GET',
	   url: baseUrl + id + '/'

	   }).then(function(response){

		return response.data;
	})


}
	



//this.getApi();



})