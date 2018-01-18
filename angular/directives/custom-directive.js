myApp.directive("bookDir",function(){

	return {
		restrict : "E" ,
		templateUrl : "views/book-template.html",
		controller : function($scope){

		}
	}
})

myApp.directive("houseDir",function(){

	return{
		restrict : "E" ,
		templateUrl : "views/house-template.html",
		controller : function($scope){

		}
	}
})

myApp.directive("charDir",function(){

	return{
		restrict : "E" ,
		templateUrl : "views/char-template.html",
		controller : function($scope){

		}
	}
})

myApp.directive("toTop",function(){

		return{

			restrict : "E",
			replace : true,
			template : "<span class='move-top fa-stack fa-lg'><i class='fa fa-chevron-circle-up fa-stack-2x fa-inverse'></i></span>",
			link : function ($scope,element,attrs){

				$(window).scroll(function(){

					if ($(window).scrollTop() > 500) {
							$(element).fadeIn();
					}
					
					else{
						$(element).fadeOut();
					}

				});

				$(element).on('click', function(){
					$('html, body').animate({ scrollTop: 50 }, 'slow');
				
				});
			}
		}
	})