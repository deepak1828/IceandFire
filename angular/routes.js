myApp.config(["$routeProvider",function($routeProvider){
  $routeProvider
  .when("/main",{
    templateUrl : "views/intro-view.html",
    controller: "totalController",
    controllerAs : "totCtrl"
  })
  .when("/books/:id1",{
    templateUrl : "views/books-view.html",
    controller: "booksController",
    controllerAs : "bookCtrl"
  })
  .when("/characters/:id2",{
    templateUrl : "views/char-view.html",
    controller : "characterController",
    controllerAs : "charCtrl"
  })
  .when("/houses/:id3",{
    templateUrl : "views/house-view.html",
    controller : "housesController",
    controllerAs : "houseCtrl"
  })

  .otherwise({
    redirectTo:'/'
  });
}]);