(function () {
"use strict";

angular
  .module("data")
  .service("MenuDataService", MenuDataService )
  .constant("baseUrl", "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'baseUrl']
  function MenuDataService ($http, baseUrl) {
    var service = this;
    var allCategories = [];

    service.getAllCategories = function () {
    return $http({
        method: 'GET',
        url: baseUrl + '/categories.json'
      });
    };

    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: 'GET',
        url: baseUrl + '/menu_items.json',
        params:  {
           category: categoryShortName
        }
      });
    };

  }

})();
