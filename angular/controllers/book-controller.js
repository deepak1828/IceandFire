myApp.controller("booksController",["$http","iceFireService","$routeParams","$location", function($http,iceFireService,$routeParams,$location){

	var main = this;

	this.bookId = $routeParams.id1;
	
	this.bookInfo = [];
	this.author;

	this.navigateBack = function (){

		$location.path("/main");
	};

	this.allBooksInfo = function(){

		iceFireService.bookInfoApi(main.bookId)
		.then(function successCallback(response){
	
		main.bookInfo.push(response.data);


		this.people =[]; // For more authors
		

			for(var i in response.data.authors){
				this.people.push(response.data.authors[i]);
			}

		main.author = this.people.toString(); 

		},function errorCallback(reason){
			alert("Error in GET");
		})
	};

	this.allBooksInfo();
	
}])