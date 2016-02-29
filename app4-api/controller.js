angular.module('app').controller('controller', function($scope, service){


$scope.whatServiceSays = service.hello;


console.log($scope.whatServiceSays);




$scope.getPokemon = function(pokeid){
	console.log('id', pokeid);


	service.getApi($scope.pokemon)
	.then(function(response){
		console.log(response);
		$scope.currentPokemon = response;

	})


}





})