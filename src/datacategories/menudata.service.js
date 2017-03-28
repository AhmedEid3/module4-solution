(function () {
"use strict";

angular
  .module("data")
  .service("MenuDataService", MenuDataService);

  MenuDataService.$inject = ['$http']
  function MenuDataService($http) {
    var service = this;
    var categories = [];
    var category = [];

    service.getAllCategories = function () {
      var allCategories = $http({
        method: "GET",
        url: "http://davids-restaurant.herokuapp.com/categories.json"
      }).then(function (response) {
        var data = response.data;
        for (var i = 0; i < data.length; i++) {
          categories.push(data[i]);
        }
        console.log(categories);
        console.log(response.status + " " + response.statusText);
        return categories;
      })
      .catch(function (response) {
        console.log('error');

      });

      return categories;
    };

    service.getItemsForCategory = function (categoryShortName) {
      var oneCategory = $http({
        method: 'Get',
        url: 'https://davids-restaurant.herokuapp.com/categories.json',
        params: {category: categoryShortName}
      }).then(function (response) {
        category = response.data;
      })
    }

  };


})();
