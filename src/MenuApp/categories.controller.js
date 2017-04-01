(function () {
"use strict";

angular
  .module("MenuApp")
  .controller("categoriesController", categoriesController);

  categoriesController.$inject = ['AllCategories']
  function categoriesController(AllCategories) {
    var category = this;

    category.allCategories = [];
    category.allCategories =AllCategories;

  }

})();
