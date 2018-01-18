myApp.service("iceFireService", function($http){

	var  main = this;

	this.url = "https://anapioficeandfire.com/api";

	this.bookInfoApi = function(item){

		return $http.get(main.url+"/books/"+item);
	}

	this.allBooksApi = function(size){

		return $http.get(main.url+"/books/?page=1&pageSize="+size);
	}

	this.allHousesApi = function(values){

		return $http.get(main.url+"/houses/?page="+values+"&pageSize=20");
	}

	this.houseInfoApi = function(item){

		return $http.get(main.url+"/houses/"+item);
	}

	this.charAllApi = function(value){   // FOR ALL CHARACTERS DATA

		return $http.get(main.url+"/characters/?page="+value+"&pageSize=30");
	}
	
	this.char_houses_Api = function(type,value){   // FOR CHARACTERS AND HOUSES COMBINED 

		return $http.get(main.url+"/"+type+"/?page="+value+"&pageSize=20");
	}

	this.charInfoApi = function(item){        // CHARACTER-DETAILS

		return $http.get(main.url+"/characters/"+item);
	}
});