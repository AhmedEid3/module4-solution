(function () {
"use strict";

angular
  .module("MenuApp")
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state("home", {
      url: '/',
      templateUrl: 'src/MenuApp/views/home.html'
    })
    .state("categories", {
      url: '/categories',
      templateUrl: 'src/MenuApp/views/categories.html',
      controller: 'categoriesController as category',
      resolve: {
        AllCategories : ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories()
              .then(function (res) {
                console.log(res.data);
                return res.data;
              });
        }]
      }
    })
    .state("items", {
      url: '/items/{name}',
      templateUrl: 'src/MenuApp/views/items.html',
      controller: 'itemsController as item',
      resolve: {
        items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.name)
              .then(function (res) {
                console.log($stateParams.name);
                console.log(res.data);
                return res.data;
              });
        }]
      }
    });

  }

})();
