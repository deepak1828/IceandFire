myApp.controller("characterController",["$http","iceFireService","$routeParams","$location",function($http,iceFireService,$routeParams,$location){
	
	var main = this;

	this.charId = $routeParams.id2;
	this.charInfo = [];
	this.seasons;
		// console.log(this.charId);

	this.navigateBack = function (){

		$location.path("/main");
	};

	this.charsDetails = function(){

		iceFireService.charInfoApi(main.charId)
		.then(function successCallback(response){

			main.charInfo.push(response.data);  
			this.series =[]; // For more seasons
		

			for(var i in response.data.tvSeries){
				this.series.push(response.data.tvSeries[i]);
				//console.log(main.people);
			}
			main.seasons = this.series.toString(); 


		},function errorCallback(reason){
			alert("Error in GET");
		})
	};     //function ends

	this.charsDetails();
	
}]) // controller ends