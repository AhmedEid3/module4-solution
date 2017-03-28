(function () {
"use strict";

angular
  .module("menuApp")
  .controller('menuController', menuController);

  menuController.$inject = ['MenuDataService'];
  function menuController(MenuDataService) {
    var menu = this;
    menu.allCategories = [];
    menu.allCategories = MenuDataService.getAllCategories();
    menu.category = MenuDataService.getItemsForCategory('B');

  }

})();
