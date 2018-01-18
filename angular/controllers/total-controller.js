myApp.controller("totalController",["$http","iceFireService", function($http,iceFireService){

	var main=this;
	this.url = "https://anapioficeandfire.com/api";

	this.allInfo = [];
	this.noOfElements = 16;

	this.bookInfo = {};
	this.houseInfo = {};
	this.charInfo = {};

	this.value1 = false ;  // SHOW/HIDE ALL DETAILS

	this.value2 = false ;  //  SHOW/HIDE BOOK

	this.value3 = false ;  //  SHOW/HIDE character

	this.value4 = false ;  // SHOW/HIDE houses

	this.sortAll = false;	// Sort for all
	this.sortKey1 = false;	// Sort for books
	this.sortKey2 = false;	// Sort for chars
	this.sortKey3 = false;	// Sort for houses

	this.nextKey1 = 1; // For changing pages of Characters

	this.nextKey2 = 1; // For changing pages of Houses

	this.nextKey3 = 1; // For changing pages of Books

	this.viewMore = function () {   //FOR LOADING MORE DATA
   		
   		 main.noOfElements += 16;  
	 
	};

	this.allBooks = function(){

		iceFireService.allBooksApi(12)
		.then(function successCallback(response){
			
		main.bookInfo = response.data ;
		main.allInfo.push.apply(main.allInfo,main.bookInfo);
		//console.log(main.bookInfo);

		},function errorCallback(reason){
		alert("Error in GET");
		})
	};

	this.allBooks();

	this.allHouses = function(){
    
   		for(var i=1;i<25;i++){
      		iceFireService.allHousesApi(i)
      		.then(function successCallback(response) {         
          		
              	main.allInfo.push.apply(main.allInfo,response.data);


        	}, function errorCallback(reason) {
          
            alert("some error occurred. Check the console.");
          
        	});
    	}

 	}// end of all houses

   this.allHouses();

   this.allCharacters = function(){
   
  		for(var i=1;i<50;i++){
 		   iceFireService.charAllApi(i)
  		   .then(function successCallback(response) {
      
          		
              		main.allInfo.push.apply(main.allInfo,response.data);
            		//console.log(main.allInfo);
                 
                             
          	}, function errorCallback(response) {
              
                alert("Error in GET");
              
            });
       	}
  	}; //  End of allCharacters

  	this.allCharacters();

	this.allShowHide = function(){   // For hiding and showing on LIST-ALL click

		main.value1 =! main.value1;
		main.value2 = false;
		main.value3 = false;
		main.value4 = false;
	};  

	this.bookShowHide = function(){   // For hiding and showing on books click
		
		main.value2 =! main.value2;
		main.value1 = false;
		main.value3 = false;
		main.value4 = false;
	
	};	

	this.loadChar = function(){        // For loading characters  seperately	
	
		iceFireService.char_houses_Api("characters",1)
		.then(function successCallback(response){
			
			main.charInfo = response.data;
		
		},function errorCallback(reason){
		alert("Error in GET");
		})
		
	};

 	this.loadChar();

	this.charsShowHide = function(){   // For hiding and showing on characters click

 		main.value3 =! main.value3;

 		if(main.value3 == true){    // while coming back to characters after some other card, always dispaly from first page

			iceFireService.char_houses_Api("characters",1)
			.then(function successCallback(response){
		
			main.houseInfo = response.data;
		
			},function errorCallback(reason){
				alert("Error in GET");
			})
		}
		main.value1 = false;
		main.value2 = false;
		main.value4 = false;
		//console.log(main.value4);
 	};

 	this.loadHouses = function(){       // For loading Houses seperately

		iceFireService.char_houses_Api("houses",1)
		.then(function successCallback(response){
	
			main.houseInfo = response.data ;

			main.allInfo.push.apply(main.allInfo,main.houseInfo);

			// console.log(main.houseData);


		},function errorCallback(reason){
			alert("Error in GET");
		})
	};

 	this.loadHouses();

 	this.houseShowHide = function(){    // For hiding and showing on houses click

		main.value4 =! main.value4;

		

		if(main.value4 == true){      // while coming back to Houses after some other card, always dispaly from first page

			iceFireService.char_houses_Api("houses",1)
			.then(function successCallback(response){
		
			main.houseInfo = response.data;
		
			},function errorCallback(reason){
				alert("Error in GET");
			})
		}

		main.value1 = false;
		main.value2 = false;
		main.value3 = false;
	//	console.log(main.value4);
		
	};

	this.nextFunc = function(type){     //  Function when called displays next page's data
	
	
		if (type === "characters"){

			main.nextKey1 += 1;

			iceFireService.char_houses_Api("characters",main.nextKey1)
			.then(function successCallback(response){
		
			main.charInfo = response.data;
		
			},function errorCallback(reason){
				alert("Error in GET");
			})
		}

		else{

			main.nextKey2 += 1;
			
			iceFireService.char_houses_Api("houses",main.nextKey2)
			.then(function successCallback(response){
		
				main.houseInfo = response.data; ;
		
			},function errorCallback(reason){
				alert("Error in GET");
			})

		} // else ends

	}; // nextFunc ends

	this.prevFunc = function(type){     // Function when called displays previous page's data
	

		if (type === "characters"){


			if(main.nextKey1 > 1){	
				main.nextKey1 -= 1;
				//	console.log(main.nextKey1);
			}
		
			iceFireService.char_houses_Api("characters",main.nextKey1)
			.then(function successCallback(response){
		
				main.charInfo = response.data;
		
			},function errorCallback(reason){
				alert("Error in GET");
			})
		}

		else{

			if(main.nextKey2 > 1){	
				main.nextKey2 -= 1;
			}
			
		iceFireService.char_houses_Api("houses",main.nextKey2)
		.then(function successCallback(response){
		
	
		main.houseInfo = response.data; ;
			
		},function errorCallback(reason){
			alert("Error in GET");
		})

		} // else ends
	}; // prevFunc ends

}])