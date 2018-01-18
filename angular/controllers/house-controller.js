myApp.controller("housesController",["$http","iceFireService","$routeParams","$location",function($http,iceFireService,$routeParams,$location){
	
	var main = this;

	this.houseInfo = [];

	this.houseId = $routeParams.id3;
	this.titles;

	this.navigateBack = function (){

		$location.path("/main");
	};


	this.housesDetails = function(){

		iceFireService.houseInfoApi(main.houseId)
		.then(function successCallback(response){
		
			main.houseInfo.push(response.data);

			this.names =[]; // For more titles
			

			for(var i in response.data.titles){
				this.names.push(response.data.titles[i]);
			}

			main.titles = this.names.toString(); 


		},function errorCallback(reason){
			alert("Error in GET");
		})

	}; // function ends

	this.housesDetails();
	
}]) // controller ends