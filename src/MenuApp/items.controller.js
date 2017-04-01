(function () {
"use strict";

angular
  .module("MenuApp")
  .controller("itemsController", itemsController);

  itemsController.$inject = ['items']
  function itemsController(items) {
    var item = this;
    item.title = "Welcome";
    item.items = [];
    item.items =items;

  }

})();
